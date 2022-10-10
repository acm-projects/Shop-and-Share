/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 //import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { NavigationContainer } from '@react-navigation/native';
 //import { createStackNavigator } from '@react-navigation/stack';
 
 import MenuBar from './src/components/MenuBar.js';
 //import NewListScreen from './src/screens/NewList';

 //const Tab = createBottomTabNavigator();
 //const Stack = createStackNavigator();
 
 const App = () => {
   return (
     <NavigationContainer>
      <MenuBar />
     </NavigationContainer>
   );
 }

 export default App;
 