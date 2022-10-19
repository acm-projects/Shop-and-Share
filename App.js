import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import HomeNoListScreen from './src/screens/HomeNoList';
import SearchFriendsScreen from './src/screens/SearchFriends';
import MyFriendsScreen from './src/screens/MyFriends';
import ProfileScreen from './src/screens/Profile';
import MenuBar from './src/components/MenuBar';
import ResetPassword1 from './src/screens/ResetPassword1';
import ResetPassword2 from './src/screens/ResetPassword2';
import EditProfile from './src/screens/EditProfile';
import LandingPage from './src/screens/LandingPage';
import SignUp from './src/screens/SignUp';
import LogIn from './src/screens/LogIn';
import NewList from './src/screens/NewList';
import InviteFriends from './src/components/InviteFriends';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <MenuBar />
    </NavigationContainer>
  );
}

export default App;