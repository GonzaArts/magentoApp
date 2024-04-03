import { AppRegistry } from 'react-native';
import App from './src/App'; // Asegúrate de que la ruta sea correcta
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
