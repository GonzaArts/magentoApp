import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import NotificationItem from '../components/Notification/NotificationItem';
import Header from '../components/Dashboard/Header';
import styles from './Styles/NotificationsScreenStyles';
import { fetchNotifications } from '../utils/api';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        setLoading(true);
        const data = await fetchNotifications();
        setNotifications(data);
        setError(null); // Resetea el estado de error si la carga es exitosa
      } catch (e) {
        setError('No se pudieron cargar las notificaciones');
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
      </View>
    );
  }

  const onDeleteNotification = (id) => {
    // Aquí podrías llamar a la API para eliminar la notificación
    // y luego actualizar el estado local
    setNotifications(currentNotifications => 
      currentNotifications.filter(notification => notification.id !== id)
    );
  };

  const renderNotification = ({ item }) => (
  <NotificationItem 
    notification={item} 
    onDelete={onDeleteNotification} 
  />
);


  return (
    <View style={styles.container}>
      <Header title="Notifications" onMenuPress={() => { } } onSettingsPress={() => { } } />
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default NotificationsScreen;
