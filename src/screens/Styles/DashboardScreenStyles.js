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
    color: '#000',
    borderWidth: 4,
    borderColor: 'black',
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loadingText: {
    marginTop: 10, // Espacio entre el loader y el texto
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', // El color del texto "Actualizando..."
  },
  // ...otros estilos que puedas necesitar...
});
