import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { AuthProvider, AuthContext } from './src/context/AuthContext';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
         <AuthContext.Consumer>          
          {({ userToken }) => (
            userToken ? <DrawerNavigator /> : <LoginScreen />
          )}
        </AuthContext.Consumer> 
        {/* <DrawerNavigator /> */}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
