import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useDimensions from '../../hooks/useDimensions';  


const cardMargin = 10;

const Card = ({ title, value }) => {
  const { width } = useDimensions();
  const cardWidth = width / 2 - cardMargin * 2;
  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    margin: cardMargin,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  cardTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA000',
  },
});

export default Card;
