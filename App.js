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
 
 import Landing from './src/screens/LandingPage/index';
 import LogIn from './src/screens/LogIn/index'
 import SignUp from './src/screens/SignUp/index'
 
 const App = () => {
   return (
     <SafeAreaView>
       <SignUp/>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   
 });
 
 export default App;
 