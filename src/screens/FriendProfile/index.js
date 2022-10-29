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
  let [text, setText] = React.useState(true);
  let changeText = () => setText(previousState => !previousState);
  let buttonText= text ? "Add Friend" : "Remove Friend"
    return (
      <>
      <ImageBackground source={require('../../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
        <View>
          <SafeAreaView>

              {/* onPress -> exit friend's profile */}
              <TouchableOpacity style={styles.CancelContainer}>
                  <Image source={require('../../../assets/images/X_Button_White.png')}/>
              </TouchableOpacity>

                <Text style={styles.FriendDisplayName}>
                    Melissa Harper
                </Text>
              {/* add variable for friend's display or full name */}
                <Text style={styles.FriendUsername}>
                    m.harper
                </Text>

                <View style={styles.ProfilePhotoShadow}/>

                <Image 
                style={styles.FriendProfilePhoto}
                source={require('../../../assets/images/Temporary_Profile_Photo.jpg')}/>  

                {/* add variables for number of lists and groups*/}
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

                <View style={styles.AddFriendContainer}>
                {/* on first press, add user to your friends. on second press,
                remove them from your friends */}
                <TouchableOpacity onPress={ () => changeText() }>
                    <Text style={styles.AddFriendButton}>
                        {buttonText}
                    </Text>  
                </TouchableOpacity>
              </View>

                <View style={styles.ProfileDetailsContainer}/>

                <Text style={styles.ProfileHeader}>
                  PROFILE
                </Text>

                <View style={styles.positionButtons}>
                    <View style={styles.DividerThick}/>
                
                {/* add navigation onPress to these buttons */}
                  <TouchableOpacity>
                      <Text style={styles.ButtonFormat}>
                          Shared Lists
                      </Text>
                      <Image 
                          style={styles.ButtonArrows}
                          source={require('../../../assets/images/Profile_Button_Arrows.png')}/>
                  </TouchableOpacity>

                    <View style={styles.DividerThin}/>

                  <TouchableOpacity>
                      <Text style={styles.ButtonFormat}>
                          Dietary Restrictions
                      </Text>
                      <Image 
                          style={styles.ButtonArrows}
                          source={require('../../../assets/images/Profile_Button_Arrows.png')}/>
                  </TouchableOpacity>

                    <View style={styles.DividerThick}/>

                </View>
          </SafeAreaView>
        </View>
        </ImageBackground>
      </>
    )
  }

  export default FriendProfileScreen;