import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  ImageBackground,
}  from "react-native";

import styles from './styles.js';

const MyFriendsScreen = () => {
    return (
      <>
      <ImageBackground source={require('../../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
        <View>
          <SafeAreaView>
                <Text>
                    my friends screen here
                </Text>
          </SafeAreaView>
        </View>
        </ImageBackground>
      </>
    )
  }

  export default MyFriendsScreen;