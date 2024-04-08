import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { staticStyles, getDynamicStyles } from './Styles/LoginScreenStyles';
import { AuthContext } from '../context/AuthContext'; // Asumiendo que tienes un AuthContext
import {Icon} from '@rneui/themed';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await signIn(username, password);
      // Navegar al Dashboard si el login es exitoso
      navigation.navigate('Dashboard');
    } catch (error) {
      // Mostrar un mensaje de error si el inicio de sesión falla
      Alert.alert("Error", error.message);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('window'));
  
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenDimensions(window);
    });

    // Devuelve una función de limpieza que se llama al desmontar el componente
    return () => subscription.remove();
  }, []);

  const dynamicStyles = getDynamicStyles(screenDimensions);


  return (
    <View style={staticStyles.container}>
      <Image 
            source={require('../assets/fondo.jpg')} 
            style={dynamicStyles.backgroundImage} 
            />
      <ScrollView style={staticStyles.scrollView}>
          
            <Text style={staticStyles.welcomeBack}>Hola, ¡Bienvenido de nuevo! 👋</Text>
            <Text style={staticStyles.introText}>Empiece a gestionar su negocio de Magento con nosotros</Text>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Usuario"
              defaultValue="test"
              style={staticStyles.inputUser}
              keyboardType="default"
              autoCapitalize="none"
              placeholderTextColor={'#999'}
              selectionColor={'#FFA000'} // Color del cursor
            />
            <View style={staticStyles.inputContainer}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Contraseña"
              style={staticStyles.input}
              secureTextEntry={!showPassword}
              placeholderTextColor={'#999'} 
              selectionColor={'#FFA000'} // Color del cursor          
            /> 
            <TouchableOpacity
            style={staticStyles.toggleShowPassword}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon 
              name={showPassword ? 'eye' : 'eye-slash'} // Cambia según el estado de showPassword
              type='font-awesome' // Asegúrate de tener esta línea si usas @rneui/themed
              color={showPassword ? '#000' : '#999'}               
              size={24}
            />
          </TouchableOpacity>
          </View>   
            <TouchableOpacity onPress={() => {/* Navegar a la pantalla de recuperación de contraseña */}} >
              <Text style={staticStyles.forgotPasswordText}>¿Ha olvidado su contraseña?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin} style={staticStyles.loginButton}>
              <Text style={staticStyles.loginButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            </ScrollView>
          </View>
        );
      };

export default LoginScreen;