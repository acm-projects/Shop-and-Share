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
}  from "react-native";

import styles from './styles.js';
import EditProfile from '../EditProfile/index.js';

const FriendProfileScreen = () => {
  let [flag, setFlag] = React.useState(true);
  let changeImage = () => setFlag(previousState => !previousState);
  let imagePath= flag ? "Add Friend" : "Remove Friend"
    return (
      <>
      <ImageBackground source={require('../../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
        <View>
          <SafeAreaView>
                <Text style={styles.WelcomeMessage}>
                    Welcome Back, 
                </Text>
              {/* add functionality to change this first name/display name*/}
                <Text style={styles.FirstName}>
                    Melissa
                </Text>
                <Text style={styles.ExclamationPoint}>
                    !
                </Text>

                {/* add functionality to change the profile image later */}
                <View style={styles.ProfilePhotoShadow}>
                </View>

                <Image 
                style={styles.ProfilePhoto}
                source={require('../../../assets/images/Temporary_Profile_Photo.jpg')}/>  

                {/* add functionality to the number of lists and groups later*/}
                <View style={styles.NumbersContainer}>
                  <Text style={styles.ListsNumber}>
                    72
                  </Text>
                  <Text style={styles.GroupsNumber}>
                    15
                  </Text>
                </View>

                <View>
                  <Text style={styles.ListsText}>
                    Lists
                  </Text>
                  <Text style={styles.GroupsText}>
                    Groups
                  </Text>
                </View>

                {/* onPress -> open edit profile component (make isVisible true)*/}
                <View style={styles.EditProfileContainer}>
                <TouchableOpacity onPress={ () => setStatus(!status) }>
                    <Text style={styles.EditProfileButton}>
                        imagePath
                    </Text>  
                </TouchableOpacity>
              </View>

                <View style={styles.ProfileDetailsContainer}>
                </View>

                <Text style={styles.ProfileHeader}>
                  PROFILE
                </Text>

                <View style={styles.positionButtons}>
                    <View style={styles.DividerThick}>
                    </View>
                  <TouchableOpacity>
                      <Text style={styles.ButtonFormat}>
                          Shared Lists
                      </Text>
                      <Image 
                          style={styles.ButtonArrows}
                          source={require('../../../assets/images/Profile_Button_Arrows.png')}/>
                  </TouchableOpacity>

                    <View style={styles.DividerThin}>
                    </View>

                  {/* onPress -> go to the friend's dietary restrictions */}
                  <TouchableOpacity>
                      <Text style={styles.ButtonFormat}>
                          Dietary Restrictions
                      </Text>
                      <Image 
                          style={styles.ButtonArrows}
                          source={require('../../../assets/images/Profile_Button_Arrows.png')}/>
                  </TouchableOpacity>

                    <View style={styles.DividerThick}>
                    </View>

                </View>
          </SafeAreaView>
        </View>
        </ImageBackground>
      </>
    )
  }

  export default FriendProfileScreen;