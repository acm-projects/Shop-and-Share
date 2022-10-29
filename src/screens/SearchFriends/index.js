import * as React from 'react';
import SearchableBar from '../../components/SearchBar.js';

import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  ImageBackground,
  Image,
}  from "react-native";

import styles from './styles.js';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import colors from '../../../assets/colors/colors.js';
import InviteFriends from '../../components/InviteFriends.js';
import friendAdd from '../../../assets/images/Add_Button_White.png';
import friendAdded from '../../../assets/images/Added_Button_White.png';


const SearchFriendsScreen = () => {
  let [flag, setFlag] = React.useState(true);
  let changeImage = () => setFlag(previousState => !previousState);
  let imagePath= flag ? friendAdd : friendAdded

    return (
      <SafeAreaView>
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
                    ADD YOUR CONTACTS
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

              {/*on first press, add friend; on second press, remove friend*/}
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
      </SafeAreaView>
    )
  }

  export default SearchFriendsScreen;