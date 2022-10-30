import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import LandingPage from './src/screens/LandingPage/index'

const App = () => {
  return (
    <SafeAreaView>
      <LandingPage />
    </SafeAreaView>
  );
};

export default App;