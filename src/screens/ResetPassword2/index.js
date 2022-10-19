import * as React from 'react';

import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  ImageBackground,
  Image
}  from "react-native";
import { TextInput } from 'react-native-gesture-handler';

import colors from '../../../assets/colors/colors.js';
import styles from './styles.js';

const ResetPassword2 = () => {
    return (
      <>
      <ImageBackground source={require('../../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
        <View>
          <SafeAreaView>

          <View style={styles.CenterContainer}>
          <Image source={require('../../../assets/images/Logo.png')}/>

          <View style={styles.Container}/>

          <Image source={require('../../../assets/images/Inbox_Icon.png')}
            style={styles.InboxIcon}
            />

          <Text style={styles.Header}>
            Check your mail.
          </Text>

          <Text style={styles.InfoText}>
          We sent you an email to change your password.
          </Text>

          </View>



          <View style={styles.buttonContainer}>
                  <TouchableOpacity>
                      <Text style={styles.buttonText}>
                          I got the email!
                      </Text>
                  </TouchableOpacity>
            </View>
            <View style={styles.CenterContainer}>
                  <TouchableOpacity>
                      <Text style={styles.skipText}>
                          Skip for now
                      </Text>
                  </TouchableOpacity>
            </View>
            
            
  
          </SafeAreaView>
        </View>
        </ImageBackground>
      </>
    )
  }

  export default ResetPassword2;