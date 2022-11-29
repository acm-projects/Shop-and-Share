import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import styles from './styles.js';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/core";
import EditProfile from '../EditProfile/index.js';

const db = firestore().collection('Users');

const ProfileScreen = () => {
  const user = firebase.auth().currentUser?.email;
  const nav = useNavigation();

  const [name, setName] = React.useState('');
  const [lists, setLists] = React.useState(0);

  React.useEffect(() => {
    db.doc(user).get().then(query => {
      setName(query.data().firstName)
    })
    getCount();
  }, [])

  const getCount = async () => {
    setLists((await db.doc(user).collection('Lists').count().get()).data().count - 1);
  }

  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      nav.pop();
      nav.replace('Landing Page');
    })
  }

  return (
    <SafeAreaView>
      <ImageBackground source={require('../../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
        <View>
          <SafeAreaView>
            <Text style={styles.WelcomeMessage}>
              Welcome Back,
            </Text>
            {/* add functionality to change this first name/display name*/}
            <Text style={styles.FirstName}>
              {name}
            </Text>
            <Text style={styles.ExclamationPoint}>
              !
            </Text>

            {/* add functionality to change the profile image later */}
            <View style={styles.ProfilePhotoShadow}>
            </View>

            <Image
              style={styles.ProfilePhoto}
              source={require('../../../assets/images/Temporary_Profile_Photo.jpg')} />

            {/* add functionality to the number of lists and groups later*/}
            <View style={{ alignItems: "center", top: 130 }}>
              <Text style={styles.ListsNumber}>
                {lists}
              </Text>
              <Text style={styles.ListsText}>
                Lists
              </Text>
            </View>

            {/* onPress -> open edit profile component */}
            <View style={styles.EditProfileContainer}>
              <TouchableOpacity onPress={() => nav.push('Edit Profile')}>
                <Text style={styles.EditProfileButton}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ProfileDetailsContainer}>
            </View>

            <Text style={styles.ProfileHeader}>
              PROFILE
            </Text>

            <View style={styles.positionButtons}>
              <View style={styles.DividerThick} />

              {/* fix navigation onPress for these buttons */}
              <TouchableOpacity
                onPress={() => navigation.navigate('My Home')}
              >
                <Text style={styles.ButtonFormat}>
                  My Home
                </Text>
                <Image
                  style={styles.ButtonArrows}
                  source={require('../../../assets/images/Profile_Button_Arrows.png')} />
              </TouchableOpacity>

              <View style={styles.DividerThin} />

              <TouchableOpacity
                onPress={() => nav.push('View Dietary Restrictions')}
              >
                <Text style={styles.ButtonFormat}>
                  Dietary Restrictions
                </Text>
                <Image
                  style={styles.ButtonArrows}
                  source={require('../../../assets/images/Profile_Button_Arrows.png')} />
              </TouchableOpacity>

              <View style={styles.DividerThick} />

              <TouchableOpacity
                onPress={() => nav.push('Reset Password 1')}
              >
                <Text style={styles.ButtonFormat}>
                  Reset Password
                </Text>
                <Image
                  style={styles.ButtonArrows}
                  source={require('../../../assets/images/Profile_Button_Arrows.png')} />
              </TouchableOpacity>

              <View style={styles.DividerThick} />

              <TouchableOpacity
                onPress={handleSignOut}
              >
                <Text style={styles.SignOutButton}>
                  Sign Out
                </Text>
                <Image
                  style={styles.ButtonArrows}
                  source={require('../../../assets/images/Profile_Button_Arrows.png')} />
              </TouchableOpacity>

              <View style={styles.DividerThick} />
            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default ProfileScreen;