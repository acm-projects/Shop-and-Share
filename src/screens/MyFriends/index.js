import * as React from 'react';
import SearchableBar from '../../components/SearchBar.js';
import InviteFriends from '../../components/InviteFriends.js';

import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  ImageBackground,
  Image
}  from "react-native";

import styles from './styles.js';
import friendRemove from '../../../assets/images/Remove_Button_Black.png';
import friendRemoved from '../../../assets/images/Removed_Button_Black.png';
import { ScrollView } from 'react-native-gesture-handler';


const MyFriendsScreen = () => {
  let [flag, setFlag] = React.useState(true);
  let changeImage = () => setFlag(previousState => !previousState);
  let imagePath= flag ? friendRemove : friendRemoved
    return (
      <>
      <ImageBackground source={require('../../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
        <View>
          <SafeAreaView>
            <View style={styles.CenterItems}>
                <Image source={require('../../../assets/images/Logo.png')}
                      style={styles.Logo}/>
              
                <SearchableBar/>
                
                <InviteFriends/>
            </View>

          <ScrollView style={styles.ScrollableSection}>
            <View style={styles.LeftCenter}>
                <Text style={styles.Header}>
                    FRIEND REQUESTS
                </Text>

                <View style={styles.AlignWithButton}>
                  <View style={styles.AlignItems}>
                      <Image source={require('../../../assets/images/Temporary_Profile_Photo.jpg')}
                          style={styles.FriendProfilePhoto}/>
                  <View>
                      <Text style={styles.DisplayName}>
                          Melissa Harper
                      </Text>
                      <Text style={styles.UserName}>
                          m.harper
                      </Text>
                </View>
              </View>
                
              {/*on first press, remove friend; on second press, add friend again*/}
              <TouchableOpacity onPress={ () => changeImage() }>
                <Image source={imagePath}
                      style={styles.AddButton}/>
              </TouchableOpacity>
            </View>
          </View>


            <View style={styles.LeftCenter}>
                <Text style={styles.Header}>
                    YOUR FRIENDS
                </Text>

                <View style={styles.AlignWithButton}>
                  <View style={styles.AlignItems}>
                      <Image source={require('../../../assets/images/Temporary_Profile_Photo.jpg')}
                          style={styles.FriendProfilePhoto}/>
                  <View>
                      <Text style={styles.DisplayName}>
                          Melissa Harper
                      </Text>
                      <Text style={styles.UserName}>
                          m.harper
                      </Text>
                </View>
              </View>
                
              {/*on first press, remove friend; on second press, add friend again*/}
              <TouchableOpacity onPress={ () => changeImage() }>
                <Image source={imagePath}
                      style={styles.AddButton}/>
              </TouchableOpacity>
            </View>

            </View>
            </ScrollView>
          </SafeAreaView>
        </View>
        </ImageBackground>
      </>
    )
  }

  export default MyFriendsScreen;