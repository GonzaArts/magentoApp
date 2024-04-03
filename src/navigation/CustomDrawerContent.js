import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Aquí puedes personalizar tu contenido del drawer, como la foto del usuario, etc. */}
      <DrawerItemList {...props} />
      <DrawerItem
        label="Cerrar sesión"
        onPress={() => { /* Lógica para cerrar sesión */ }}
      />
      {/* Agrega más items si es necesario */}
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;