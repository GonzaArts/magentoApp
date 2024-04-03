import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import CustomDrawerContent from './CustomDrawerContent'; // Componente personalizado para el contenido del Drawer

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }}/>
      {/* ... otros elementos de navegación ... */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
