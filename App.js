import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingPage from './src/screens/LandingPage';
import LogIn from './src/screens/LogIn/index';
import SignUp from './src/screens/SignUp/index';
import HomeNoListScreen from './src/screens/HomeNoList';
import SetDietaryRestrictions from './src/screens/SetDietaryRestrictions';
import NewList from './src/screens/NewList';
import ViewList from './src/screens/ViewList';
import EditList from './src/screens/EditList';
import MenuBar from './src/components/MenuBar';

const Stack = createNativeStackNavigator();
const Bar = createBottomTabNavigator();

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
          name="Home No List"
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
          name="Edit List"
          component={EditList}
        />
        <Bar.Screen
          options={{ headerShown: false }}
          name="Menu Bar"
          component={MenuBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;