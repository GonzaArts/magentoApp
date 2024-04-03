import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  signInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  button: {
    backgroundColor: '#FFA000', // Color del botón de inicio de sesión
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logo: {
    // Si tienes un logo, aquí puedes agregar el estilo
  },
  // Añade más estilos según necesites
});
