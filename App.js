import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screen/WelcomeScreen';
import UserScreen from './screen/UserScreen';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      <Drawer.Screen name="User" component={UserScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

