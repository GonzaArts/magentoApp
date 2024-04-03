export const fetchNotifications = async () => {
  // Simula una llamada a una API
  return Promise.resolve([
    { id: '1', title: 'Notificación 1', message: 'Mensaje de la notificación 1', date: '2023-01-01' },
    { id: '2', title: 'Notificación 2', message: 'Mensaje de la notificación 2', date: '2023-01-02' },
    { id: '3', title: 'Notificación 3', message: 'Mensaje de la notificación 3', date: '2023-01-03' },
    // Añade más notificaciones de ejemplo
  ]);
};
