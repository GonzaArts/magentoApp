import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Icon} from '@rneui/themed'; // Asegúrate de tener este paquete o utiliza otro para el ícono


const NotificationItem = ({ notification, onDelete }) => {
  
  
  return (
    <View style={styles.container}>
      {notification.icon && (
        <Image source={{ uri: notification.icon }} style={styles.icon} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{notification.title}</Text>
        <Text style={styles.message}>{notification.message}</Text>
        <Text style={styles.date}>{notification.date}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(notification.id)} style={styles.actionButton}>
        <Icon name="close" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    fontSize: 14,
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  actionButton: {
    padding: 10,
    backgroundColor: '#FFA000',
    borderRadius: 5,
  },
  actionButtonText: {
    color: '#fff',
  },
  // Añade más estilos según necesites
});

export default NotificationItem;
