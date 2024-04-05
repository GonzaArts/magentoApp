import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import styles from './Styles/LoginScreenStyles';
import { AuthContext } from '../context/AuthContext'; // Asumiendo que tienes un AuthContext
import {Icon} from '@rneui/themed';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);

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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
            {/* <Image source={require('../assets/logo.png')} style={{width: 380, height: 120, alignSelf: 'center'}} /> */}
            <Text style={styles.welcomeBack}>Hola, ¡Bienvenido de nuevo! 👋</Text>
            <Text style={styles.introText}>Empiece a gestionar su negocio de Magento con nosotros</Text>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Usuario"
              style={styles.inputUser}
              keyboardType="default"
              autoCapitalize="none"
              autoFocus
              placeholderTextColor={'#999'}
              selectionColor={'#FFA000'} // Color del cursor
            />
            <View style={styles.inputContainer}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Contraseña"
              style={styles.input}
              secureTextEntry={!showPassword}
              placeholderTextColor={'#999'} 
              selectionColor={'#FFA000'} // Color del cursor          
            /> 
            <TouchableOpacity
            style={styles.toggleShowPassword}
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
              <Text style={styles.forgotPasswordText}>¿Ha olvidado su contraseña?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <Text style={styles.finalText}>
              <Text style={{ fontWeight: 'bold' }}>Magento Mobile Admin</Text> es una plataforma de gestión open source para Magento. Adaptable y personalizable, lo que ves es solo el inicio. Únete, explora y adapta esta demo a tus necesidades de negocio.
            </Text>
            </ScrollView>
          </View>
        );
      };

export default LoginScreen;