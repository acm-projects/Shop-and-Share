import * as React from 'react';
import SearchableBar from '../../components/SearchBar.js';
import InviteFriends from '../../components/InviteFriends.js';
import { useState } from 'react';

import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  ImageBackground,
  Image,
  FlatList
}  from "react-native";

import styles from './styles.js';
import friendRemove from '../../../assets/images/Remove_Button_Black.png';
import friendRemoved from '../../../assets/images/Removed_Button_Black.png';
import { ScrollView } from 'react-native-gesture-handler';


const MyFriendsScreen = () => {
  let [flag, setFlag] = React.useState(true);
  let changeImage = () => setFlag(previousState => !previousState);
  let imagePath = flag ? friendRemove : friendRemoved

  const [requests, changeRequests]  = useState([
    { id : 1, name : "request1"},
  ]);
  const [friends, changeFriends]  = useState([
  ]);
  
  const oneRequest = ( {item} ) => (
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
      <TouchableOpacity onPress={() => onAccept()}
          style={{marginLeft: 35}}>
      <Image source={require('../../../assets/images/Accept_Button_White.png')}
            style={styles.RemoveButton}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onDecline()}>
      <Image source={require('../../../assets/images/Decline_Button_Black.png')}
            style={styles.RemoveButton}/>
    </TouchableOpacity>
    </View>
)

const oneFriend = ( {item} ) => (
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
        style={styles.RemoveButton}/>
  </TouchableOpacity>
  </View>
)
  
  const [requestState, setrequestState] = useState(requests)
  const [idx, incr] = useState(2);
  const [friendState, setfriendState] = useState(friends)

  const noRequestsMessage = ( {item} ) => {
    return (
      <View style={styles.AlignWithButton}>
        <View>
          <Text style={styles.EmptyRequests}>
              You have no friend requests!
          </Text>
        </View>
      </View>
    )
  }

  const onAccept = () => {
    requests.pop({
      id: 1,
      name: "request1"
    });
    friends.push({
      id: 1,
      name: "request1"
    })
    var newRequests = [...requests]
    setrequestState(newRequests)
    changeRequests(newRequests)
  }

  const onDecline = () => {
    requests.pop({
      id: 1,
      name: "request1"
    });
    var newRequests = [...requests]
    setrequestState(newRequests)
    changeRequests(newRequests)
  }

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
                    FRIEND REQUESTS
                </Text>
                <FlatList 
                  nestedScrollEnabled
                  data = { requestState }
                  renderItem = { oneRequest }
                  ListEmptyComponent={noRequestsMessage}
                />
          </View>


            <View style={styles.LeftCenter}>
                <View style={{marginTop: 10}}>
                <Text style={styles.Header}>
                    YOUR FRIENDS
                </Text>
                </View>
                <FlatList 
                  nestedScrollEnabled
                  data = { friendState }
                  renderItem = { oneFriend }
                />
            </View>
            </ScrollView>
          </SafeAreaView>
        </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }

  export default MyFriendsScreen;