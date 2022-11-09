import * as React from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { TextInput } from 'react-native-gesture-handler';

import colors from '../../../assets/colors/colors.js';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const ResetPassword1 = () => {
  const nav = useNavigation();

  return (
    <>
      <ImageBackground source={require('../../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
        <View>
          <SafeAreaView>

            <View style={styles.Logo}>
              <Image source={require('../../../assets/images/Logo.png')} />
            </View>

            <View style={styles.Container} />

            <Text style={styles.Header}>
              Reset Password.
            </Text>

            <Text style={styles.InfoText}>
              Enter the email associated with your
              account, and we’ll send you an email with instructions to reset your password.
            </Text>

            <TextInput
              style={styles.EmailInput}
              placeholder="Email"
              multiline={true}
            />

            <View style={styles.DividerThin}>
            </View>

            <View style={styles.buttonContainer}>
              {/*onpress go to next reset password page */}
              <TouchableOpacity onPress={
                () => alert('Functionality not supported yet')}>
                <Text style={styles.buttonText}>
                  Send Email
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cancelProcess}>
              <TouchableOpacity onPress={() => nav.pop()}>
                <Text style={styles.cancelText}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>

          </SafeAreaView>
        </View>
      </ImageBackground>
    </>
  )
}

export default ResetPassword1;