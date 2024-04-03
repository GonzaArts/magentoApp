import React, { createContext, useState } from 'react';
import { adminLogin } from '../utils/auth'; // Tu función de autenticación

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  const signIn = async (username, password) => {
    try {
      const token = await adminLogin(username, password);
      setUserToken(token); // Almacena el token en el estado
      // También podrías querer guardar el token en AsyncStorage o en un lugar seguro aquí
    } catch (error) {
      // Manejar el error, por ejemplo mostrar un mensaje al usuario
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ userToken, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
