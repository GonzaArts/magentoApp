import { StyleSheet } from 'react-native';


const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Puedes cambiar el color de fondo si es necesario
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  
  welcomeBack: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000', // Puedes cambiar los colores según tu diseño
    marginBottom: 10,
    marginTop: 20,
  },
  introText: {
    fontSize: 16,
    color: '#666', // Este es un color gris, ajusta según tu diseño
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  inputUser: {
    flex: 1,
    height: 50,
    borderColor: '#ddd', // Color de borde del input
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    color: '#444', // Color del texto del input
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#444', // Mantén el color que ya tenías
  },
  toggleShowPassword: {
    marginLeft: 10,
  },
  icon: {
    color: '#999',
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
  showPasswordButton: {
    backgroundColor: '#FFA000', // Color de fondo del botón de mostrar contraseña
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
    marginBottom: 15,
    },
  showPasswordButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    },
  logo: {
    alignSelf: 'center',
    width: '100%',
    aspectRatio: 1, 
    marginBottom: 15,
    },
  });
  const getDynamicStyles = (dimensions) => StyleSheet.create({
    backgroundImage: {
      width: dimensions.width, 
      height: '30%', 
      borderBottomLeftRadius: dimensions.width / 8.5,
      borderBottomRightRadius: dimensions.width / 8.5,
      
    },
    
  });

  export { staticStyles, getDynamicStyles };
