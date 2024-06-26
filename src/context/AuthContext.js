import React, { createContext, useState } from 'react';
import { adminLogin } from '../utils/auth'; // Tu función de autenticación
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  const signIn = async (username, password) => {
    try {
      const token = await adminLogin(username, password);
      setUserToken(token); // Almacena el token en el estado
      await AsyncStorage.setItem('userToken', token);
      // También podrías querer guardar el token en AsyncStorage o en un lugar seguro aquí
    } catch (error) {
      // Manejar el error, por ejemplo mostrar un mensaje al usuario
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('userToken'); // Asegúrate de limpiar el token de AsyncStorage
      setUserToken(null); // Resetea el estado del token a null
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ userToken, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
