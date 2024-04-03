import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import styles from './Styles/LoginScreenStyles';
import { AuthContext } from '../context/AuthContext'; // Asumiendo que tienes un AuthContext

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

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeBack}>Hola, ¡Bienvenido de nuevo! 👋</Text>
      <Text style={styles.introText}>Empiece a gestionar su negocio de Magento con nosotros</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Usuario"
        style={styles.input}
        keyboardType="default"
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => {/* Navegar a la pantalla de recuperación de contraseña */}}>
        <Text style={styles.forgotPasswordText}>¿Ha olvidado su contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;