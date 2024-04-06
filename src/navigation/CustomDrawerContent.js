import {React, useContext} from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {AuthContext} from '../context/AuthContext';
  

function CustomDrawerContent(props) {
  const { signOut } = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      {/* Aquí puedes personalizar tu contenido del drawer, como la foto del usuario, etc. */}
      <DrawerItemList {...props} />
      <DrawerItem
        label="Cerrar sesión"
        onPress={() => signOut()}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;