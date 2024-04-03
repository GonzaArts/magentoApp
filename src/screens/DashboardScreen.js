import React, { useState } from 'react';
import { View, FlatList, Dimensions, Text } from 'react-native';
import Header from '../components/Dashboard/Header';
import Card from '../components/Dashboard/Card';
import OrderItem from '../components/Dashboard/OrderItem';
import { LineChart } from 'react-native-chart-kit';
import styles from './Styles/DashboardScreenStyles';
import { Picker } from '@react-native-picker/picker';


const DashboardScreen = () => {
  const chartData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [{
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2
    }]
  };

  const chartConfig = {
    backgroundGradientFrom: "#FFF",
    backgroundGradientTo: "#FFF",
    color: (opacity = 1) => `rgba(255, 166, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  const cardData = [
    { title: 'Revenue', value: '$0.00' },
    { title: 'Tax', value: '$0.00' },
    { title: 'Shipping', value: '$0.00' },
    { title: 'Quantity', value: '0' },
  ];

  const ordersData = [
    { name: 'test yy', items: 1, total: 36.00 },
    { name: 'Test 1', items: 5, total: 113.00 },
  ];

  const renderCard = ({ item }) => (
    <Card title={item.title} value={item.value} />
  );

  const [filter, setFilter] = useState('7days');

  return (
    <View style={styles.dashboardContainer}>
      <FlatList
        ListHeaderComponent={
          <><>
            <Header title="Dashboard" onMenuPress={() => { } } onSettingsPress={() => { } } />
            <FlatList
              data={cardData}
              renderItem={renderCard}
              keyExtractor={(item, index) => `card-${index}`}
              numColumns={2}
              scrollEnabled={false} />
            <LineChart
              data={chartData}
              width={Dimensions.get('window').width}
              height={220}
              yAxisLabel="$"
              chartConfig={chartConfig}
              bezier
              style={styles.chart} />
          </>
          <View style={styles.filterContainer}>
        <Picker
          selectedValue={filter}
          style={styles.pickerStyle}
          onValueChange={(itemValue, itemIndex) => setFilter(itemValue)}
        >
          <Picker.Item label="Últimos 7 días" value="7days" />
          <Picker.Item label="Último mes" value="1month" />
          <Picker.Item label="Últimos 3 meses" value="3months" />
          <Picker.Item label="Últimos 6 meses" value="6months" />
          <Picker.Item label="Último año" value="1year" />
        </Picker>
      </View><Text style={styles.OrderTitle}>Ultimas Ventas</Text></>
        }
        data={ordersData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
    </View>
  );
};

export default DashboardScreen;
