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

const MyFriendsScreen = () => {
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

            <TextInput style={styles.input} placeholder="Search" />

            <View style={styles.buttonContainer2}>
              <TouchableOpacity
                onPress={() => navigation.navigate('InviteScreen')}>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('SearchFriendsScreen')}>

                <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-start",}}>
                    <View style={styles.ProfilePicture}>
                      <Image style={{ width: 70, height: 70, resizeMode: 'contain', marginLeft: 5, marginBottom: 100}}
                        source={require('../../../assets/images/ProfilePicture.png')} />
                    </View>
                      <Text style={styles.InviteFriends}>
                        Invite your friends to Shop&Share
                      </Text>
                      <Text style={styles.Link}>
                        shop&sha.re/{username}
                      </Text>
                      <View style={styles.ShareButton}>
                          <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 50, marginBottom: 10}}
                          source={require('../../../assets/images/ShareButton.png')} />
                      </View>
                </View>
              </TouchableOpacity>
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

export default MyFriendsScreen;