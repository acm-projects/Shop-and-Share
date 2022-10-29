import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import HomeNoListScreen from '../screens/HomeNoList';
import NewListScreen from '../screens/NewList';


const Stack = createStackNavigator();


const HomeStackScreen = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
            name="Home No Lists"
            component={HomeNoListScreen}
            options={{headerShown: false}} />

            <Stack.Screen
            name="Home New List"
            component={NewListScreen}
            options={{headerShown: false}} />

            <Stack.Screen
            name="Home View List"
            component={NewListScreen}
            options={{headerShown: false}} />
            
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStackScreen;