import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderItem = ({ order }) => {
  return (
    <View style={styles.orderItem}>
      <Text style={styles.orderText}>{order.name}</Text>
      <Text style={styles.orderText}>Items{order.items}, Total ${order.total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  orderText: {
    fontSize: 16,
    color: '#333',
  },
  // Añade más estilos según necesites
});

export default OrderItem;
