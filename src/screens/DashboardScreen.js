import React, { useState, useEffect } from 'react';
import { View, FlatList, Dimensions, Text, Modal } from 'react-native';
import Header from '../components/Dashboard/Header';
import Card from '../components/Dashboard/Card';
import OrderItem from '../components/Dashboard/OrderItem';
import { BarChart } from "react-native-gifted-charts";
import styles from './Styles/DashboardScreenStyles';
import { Picker } from '@react-native-picker/picker';
import { getSales } from '../utils/auth';
import LoaderKit from 'react-native-loader-kit';


const DashboardScreen = () => {

  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('currentYear');
  const [chartData, setChartData] = useState([]);


  const getFilterDates = (filter) => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
  
    switch (filter) {
      case 'today':        
        return { fromDate: startOfDay.toISOString(), toDate: endOfDay.toISOString(), format: { hour: '2-digit', minute: '2-digit' } };
      case '24hours':
        const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
        return { fromDate: yesterday.toISOString(), toDate: new Date().toISOString(), format: { hour: '2-digit', minute: '2-digit' } };
      case '7days':
        const lastWeek = new Date(new Date().setDate(new Date().getDate() - 7));
        return { fromDate: lastWeek.toISOString(), toDate: new Date().toISOString(), format: { day: 'numeric', month: 'short' } };
      case 'currentMonth':
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        return { fromDate: startOfMonth.toISOString(), toDate: endOfMonth.toISOString(), format: { day: 'numeric', month: 'short' } };
      case 'currentYear':
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        const endOfYear = new Date(now.getFullYear(), 11, 31);
        return { fromDate: startOfYear.toISOString(), toDate: endOfYear.toISOString(), format: { day: 'numeric', month: 'short' } };
      case 'from2Years':
        const twoYearsAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 2));
        return { fromDate: twoYearsAgo.toISOString(), toDate: new Date().toISOString(), format: { month: 'short' } };
      default:
        return {};
    }
  };

  useEffect(() => {
    const loadCardData = async () => {
      setLoading(true);
      try {
        const { fromDate, toDate, format } = getFilterDates(filter); // Usa la función getFilterDates para obtener las fechas
        const { salesSummary, chartData } = await getSales(fromDate, toDate, format);
      setCardData(salesSummary);
      const dataLimit = chartData.slice(-7);
      setChartData(dataLimit);
    } catch (error) {
      console.error("Error fetching card data:", error);
    } finally {
      setLoading(false);
    }
  };

  loadCardData();
}, [filter]);

  const renderCard = ({ item }) => (
    <Card title={item.title} value={item.value} />
  );

  if (loading) {
    return (
      <Modal
        transparent={true}
        animationType={'none'}
        visible={loading}
        onRequestClose={() => {console.log('close modal')}}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            {/* Usando LoaderKit con el tipo LineScale */}
            <LoaderKit
              style={{ width: 50, height: 50 }}
              name={'LineScale'}
              color={'red'} // Cambia el color según tu preferencia
            />
            <Text style={styles.loadingText}>Actualizando...</Text>
          </View>
        </View>
      </Modal>
    );
  }


  const ordersData = [
    { name: 'test yy', items: 1, total: 36.00 },
    { name: 'Test 1', items: 5, total: 113.00 },
  ];

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
            <BarChart
              data={chartData}
              isAnimated={true}
              frontColor="#FFA000"
              width={Dimensions.get('window').width}
              height={220}
              xAxisLabelTextStyle={{color: '#000'}}
              yAxisTextStyle={{color: '#000'}}
              maxValue={20}
              // yAxisLabelTexts={['0', '5', '10', '15', '20']}           
              bezier
              style={styles.chart}
              renderTooltip={(item, index) => (
                <View
                  style={{
                    marginBottom: 15,
                    backgroundColor: '#000',
                    color: '#fff',
                    marginLeft: 5,
                    paddingHorizontal: 6,
                    paddingVertical: 4,
                    borderRadius: 4,
                  }}>
                  <Text>{item.value}</Text>
                </View>
              )}              
              />
          </>
          <View style={styles.filterContainer}>
          <Picker
            selectedValue={filter}
            style={styles.pickerStyle}
            itemStyle={{color: 'black'}}
            dropdownIconColor={'black'}
            selectionColor={'black'}
            onValueChange={(itemValue, itemIndex) => setFilter(itemValue)}
          >
            <Picker.Item label="Hoy" value="today" />
            <Picker.Item label="Últimas 24 horas" value="24hours" />
            <Picker.Item label="Últimos 7 días" value="7days" />
            <Picker.Item label="Mes actual" value="currentMonth" />
            <Picker.Item label="Año actual" value="currentYear" />
            <Picker.Item label="Desde hace 2 años" value="from2Years" />
          </Picker>
      </View>
      <Text style={styles.OrderTitle}>Ultimas Ventas</Text></>
        }
        data={ordersData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
    </View>
  );
};

export default DashboardScreen;
