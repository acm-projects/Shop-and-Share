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
import LandingPage from './src/screens/LandingPage';
import LogIn from './src/screens/LogIn/index'
import SignUp from './src/screens/SignUp/index'

const App = () => {
  return (
    <SafeAreaView>
      <SignUpPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
