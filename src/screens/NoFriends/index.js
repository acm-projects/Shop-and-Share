import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NewListScreen from '../NewList';


import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

import colors from '../../../assets/colors/colors.js';
import styles from './styles.js';
import SearchableBar from '../../components/SearchBar';
import InviteFriends from '../../components/InviteFriends';

const NoFriendsScreen = () => {
  const username = "Soumika-Seelam";
  return (
    <>
      <ImageBackground source={require('../../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
        <View>
          <SafeAreaView>
            <View style={styles.Logo}>
              <Image source={require('../../../assets/images/Logo.png')} />
            </View>

            <SearchableBar/>

            <View style={styles.inviteContainer}>
              <InviteFriends/>
            </View>

            <Text style={styles.NoLists}>
              You currently have no friends!
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SearchFriendsScreen')}
              >
                <Text style={styles.buttonText}>
                  Search for Friends!
                </Text>
              </TouchableOpacity>
            </View>

          </SafeAreaView>
        </View>
      </ImageBackground >
    </>
  )
}

export default NoFriendsScreen;