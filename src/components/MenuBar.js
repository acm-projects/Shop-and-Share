import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNoListScreen from '../screens/HomeNoList';
import SearchFriendsScreen from '../screens/SearchFriends';
import NoFriendsScreen from '../screens/NoFriends';
import ProfileScreen from '../screens/Profile';
import { Platform, StyleSheet, View, Text } from 'react-native';

import { 
  Image,
}  from "react-native";

const Tab = createBottomTabNavigator();


const MenuBar = () => {
  return (
    <>
      <Tab.Navigator 
        screenOptions={({route, navigation}) => ({
          tabBarShowLabel: false,
          tabBarLabel: navigation.isFocused() ? route.name : '',
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return(focused ? <Image source={require('../../assets/images/Home_Active_Icon.png')}/> : <Image source={require('../../assets/images/Home_Inactive_Icon.png')}/>);
            } else if (route.name === 'Search') {
              return(focused ? <Image source={require('../../assets/images/Search_Active_Icon.png')}/> : <Image source={require('../../assets/images/Search_Inactive_Icon.png')}/>);
            } else if (route.name === 'Friends') {
              return(focused ? <Image source={require('../../assets/images/Friends_Active_Icon.png')}/> : <Image source={require('../../assets/images/Friends_Inactive_Icon.png')}/>);
            } else if (route.name === 'Profile') {
              return(focused ? <Image source={require('../../assets/images/Profile_Active_Icon.png')}/> : <Image source={require('../../assets/images/Profile_Inactive_Icon.png')}/>);
            }},
      })}
    iconStyle={{
      width:28,
      height:28,
      padding:0,
    }}
    >

      <Tab.Screen name="Home" component={HomeNoListScreen} options={{ headerShown: false}} />
      <Tab.Screen name="Search" component={SearchFriendsScreen} options={{ headerShown: false}} />
      <Tab.Screen name="Friends" component={NoFriendsScreen} options={{ headerShown: false}} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false}} />

      </Tab.Navigator>
    </>
  );
}

export default MenuBar;