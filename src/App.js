import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import { AuthProvider, AuthContext } from './context/AuthContext';
import LoginScreen from './screens/LoginScreen';

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
