import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff', // Puedes cambiar el color de fondo si es necesario
  },
  welcomeBack: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000', // Puedes cambiar los colores según tu diseño
    marginBottom: 10,
  },
  introText: {
    fontSize: 16,
    color: '#666', // Este es un color gris, ajusta según tu diseño
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: '#ddd', // Color de borde del input
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: '#FFA000', // Color del enlace Olvidé mi contraseña
    textAlign: 'right',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#FFA000', // Color de fondo del botón de inicio de sesión
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Sombra en Android
    // Sombra para iOS (opcional)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
