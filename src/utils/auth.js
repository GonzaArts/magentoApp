import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://www.bluenty.com/index.php/rest/V1';


export const adminLogin = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/integration/admin/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error de autenticación.');
    }

    const token = await response.json();
    await AsyncStorage.setItem('adminToken', token); // Considera guardar el token en un lugar seguro
    return token;
  } catch (error) {
    console.error('Error en admin login:', error);
    throw error;
  }
};

//Extraer ganancias de pedidos de la API y almacenarlas en AsyncStorage
export const getSales = async (fromDate, toDate) => {
  const optionsForDay = { month: 'short', day: 'numeric' };

  try {
    const token = await AsyncStorage.getItem('adminToken');
    // Asume que tienes una función que convierte el filtro en fechas de inicio y fin
    const searchCriteria = `searchCriteria[filterGroups][0][filters][0][field]=created_at&` +
      `searchCriteria[filterGroups][0][filters][0][value]=${fromDate}&` +
      `searchCriteria[filterGroups][0][filters][0][conditionType]=gteq&` + // Mayor o igual que fromDate
      `searchCriteria[filterGroups][1][filters][0][field]=created_at&` +
      `searchCriteria[filterGroups][1][filters][0][value]=${toDate}&` +
      `searchCriteria[filterGroups][1][filters][0][conditionType]=lteq`; // Menor o igual que toDate

    const response = await fetch(`${API_URL}/orders?${searchCriteria}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al obtener las ventas.');
    }

    const { items } = await response.json();

    let totalRevenue = 0;
    let totalTax = 0;
    let totalShipping = 0;
    let totalQuantity = 0;
    // Preparar estructura de datos para el BarChart
    const chartData = [];
    items.forEach(order => {
      totalRevenue += order.base_grand_total;
      totalTax += order.tax_amount;
      totalShipping += order.shipping_amount;
      totalQuantity += order.total_qty_ordered;

      const existingData = chartData.find(data => data.label === new Date(order.created_at).toLocaleDateString('es-ES', optionsForDay));
      if (existingData) {
        existingData.value += order.total_qty_ordered;
      } else {
        chartData.push({
          value: order.total_qty_ordered, // Cantidad total de cada orden para la altura de la barra
          label: new Date(order.created_at).toLocaleDateString('es-ES', optionsForDay), // Fecha de la orden para la etiqueta
        });
      }
    });

    const salesSummary = [
      { title: 'Ingresos', value: `${totalRevenue.toFixed(2)}€` },
      { title: 'Impuestos', value: `${totalTax.toFixed(2)}€` },
      { title: 'Envios', value: `${totalShipping.toFixed(2)}€` },
      { title: 'Cantidad', value: `${totalQuantity}` },
    ];

    // Asegúrate de guardar el resumen y los datos del gráfico en AsyncStorage si es necesario
    await AsyncStorage.setItem('@salesSummary', JSON.stringify(salesSummary));
    await AsyncStorage.setItem('@chartData', JSON.stringify(chartData));

    return { salesSummary, chartData };
  } catch (error) {
    console.error('Error al obtener las ventas:', error);
    throw error;
  }
};


//Realizar una petición a la API para obtener las notificaciones y almacenarlas en AsyncStorage
export const getNotifications = async () => {
  try {
    const userToken = await AsyncStorage.getItem('adminToken');
    let notifications = await AsyncStorage.getItem('@notifications');

    notifications = notifications ? JSON.parse  (notifications) : [];
    const response = await fetch(`${API_URL}/notifications`, {
      method: 'POST',
      body: JSON.stringify({ read: false }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al obtener las notificaciones.');
    }

    notifications = [...notifications, ...response.json()];
    await AsyncStorage.setItem('@notifications', JSON.stringify(notifications));
    return notifications;
  } catch (error) {
    console.error('Error al obtener las notificaciones:', error);
    throw error;
  }
};

//Marcar como leída una notificación en la API y actualizar el estado local de dicha notificación
export const markAsReadNotification = async notificationId => {
  try {
    //Obtener token del usuario logado
    const userToken = await AsyncStorage.getItem('adminToken');

    //Buscar la notificación por su ID en el array de notificaciones locales
    const notifications = await getNotifications();
    const index = notifications.findIndex(notification => notification.id === notificationId);
    if (index < 0) {
      throw new Error('Notificación no encontrada.');
    }

    //Poner a "read" la notificación en la API y en el array local
    await Promise.all([
      fetch(`${API_URL}/notifications/${notificationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
      }).then(() => {
        notifications[index].read = true;
      }),
      AsyncStorage.setItem('@notifications', JSON.stringify(notifications)),
    ]);
  } catch (error) {
    console.error('Error al marcar como leída la notificación:', error);
    throw error;
  }
};

export const getAdminToken = async () => {
    try {
      const token = await AsyncStorage.getItem('adminToken');
      if (token !== null) {
        return token;
      }
    } catch (error) {
      console.error('Error al obtener el token de administrador:', error);
    }
  };

  export const logout = async () => {
    try {
      await AsyncStorage.removeItem('adminToken');
      // Realizar cualquier otra acción de cierre de sesión aquí
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };