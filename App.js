import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './src/screens/LandingPage';
import LogIn from './src/screens/LogIn/index';
import SignUp from './src/screens/SignUp/index';
import HomeNoListScreen from './src/screens/HomeNoList';
import SetDietaryRestrictions from './src/screens/SetDietaryRestrictions';
import NewList from './src/screens/NewList';
import ViewList from './src/screens/ViewList';


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
        <Stack.Screen
          options={{ headerShown: false }}
          name="Sign Up 2"
          component={SetDietaryRestrictions}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="New List"
          component={NewList}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="View List"
          component={ViewList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;