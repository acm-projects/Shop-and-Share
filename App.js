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
import NewListScreen from './src/screens/NewList';
import InviteFriends from './src/components/InviteFriends';
import AddItems from './src/components/AddItems';
import FriendProfileScreen from './src/screens/FriendProfile';
import EditListScreen from './src/screens/EditList';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <FriendProfileScreen />
    </NavigationContainer>
  );
}

export default App;