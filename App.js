/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './src/screens/LandingPage';
import LogIn from './src/screens/LogIn/index';
import SignUp from './src/screens/SignUp/index';
import HomeNoListScreen from './src/screens/HomeNoList';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Landing Page"
          component={LandingPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Log In"
          component={LogIn}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Sign Up"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeNoListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
