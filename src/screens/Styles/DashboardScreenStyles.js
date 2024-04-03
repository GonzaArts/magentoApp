import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FFA000',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: 'white',
  },
  OrderTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:10,
  },
  filterContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  pickerStyle: {
    width: '100%',
    height: 50,
  },
  // ...otros estilos que puedas necesitar...
});
