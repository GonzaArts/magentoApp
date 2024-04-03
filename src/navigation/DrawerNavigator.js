import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import CustomDrawerContent from './CustomDrawerContent'; 
import NotificationsScreen from '../screens/NotificationsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen 
            name="Dashboard" 
            component={DashboardScreen} 
            options={{ headerShown: false }} // Esto oculta el encabezado automático
          />
          <Drawer.Screen 
            name="Notifications" 
            component={NotificationsScreen} 
            options={{ headerShown: false }} // Asumiendo que también quieres usar tu propio encabezado aquí
          />
          {/* ... otros elementos de navegación ... */}
        </Drawer.Navigator>
      );
    };
    
    export default DrawerNavigator;