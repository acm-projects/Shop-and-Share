import { useState } from "react";
import * as React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground
} from "react-native";

import colors from "../../../assets/colors/colors.js";
import styles from "./styles.js";
import { TextInput } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";

const db = firestore().collection('Users');

const EditProfile = () => {
  const nav = useNavigation();
  const user = db.doc(firebase.auth().currentUser?.email);

  const [modalVisible, setModalVisible] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = () => {
    if (firstName != '')
      user.update({ firstName: firstName })
    if (lastName != '')
      user.update({ lastName: lastName })
    if (number != '')
      user.update({ phone: number })
    setModalVisible(!modalVisible);
    nav.pop();
  }

  const handleCancel = () => {
    setModalVisible(!modalVisible);
    nav.pop();
  }

  return (
    <View>
      <ImageBackground source={require('../../../assets/images/Background.jpg')}
      style={styles.ImageBackground}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.Center}>
          <View style={styles.ModalView}>

            <View styles={styles.Options}>
              <TouchableOpacity
                onPress={handleCancel}>
                <Text style={styles.CancelButton}>Cancel</Text>
              </TouchableOpacity>

              {/*onPress -> save user info*/}
              <TouchableOpacity
                onPress={handleSubmit}>
                <Text style={styles.SaveButton}>Save</Text>
              </TouchableOpacity>
            </View>

            {/* onPress -> change profile photo*/}
            <TouchableOpacity onPress={() => alert('Functionality not supported yet')}>
              <Image
                source={require('../../../assets/images/Temporary_Profile_Photo.jpg')}
                style={styles.ProfilePhotoContainer}>
              </Image>
            </TouchableOpacity>

            {/* onPress -> change profile photo*/}
            <TouchableOpacity styles={styles.ButtonContainer}>
              <Text style={styles.ChangePhotoButton}>Change profile photo</Text>
            </TouchableOpacity>

            <View style={styles.DividerThick}>
            </View>

            <View style={styles.AlignHeaderAndInput}>
              <Text style={styles.Header}>First Name</Text>
              <TextInput
                style={styles.Input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
              >
              </TextInput>
            </View>

            <View style={styles.DividerThin}>
            </View>

            <View style={styles.AlignHeaderAndInput}>
              <Text style={styles.Header}>Last Name</Text>
              <TextInput
                style={styles.Input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
              >
              </TextInput>
            </View>

            <View style={styles.DividerThin}>
            </View>

            <View style={styles.AlignHeaderAndInput}>
              <Text style={styles.Header}>Username</Text>
              <TextInput style={styles.Input}
                placeholder="Username"
                autoCapitalize='none'>
              </TextInput>
            </View>

            <View style={styles.DividerThick}>
            </View>

            <View style={styles.AlignHeaderAndInput}>
              <Text style={styles.Header}>Phone Number</Text>
              <TextInput
                style={styles.Input}
                placeholder="Phone Number"
                keyboardType='numeric'
                value={number}
                onChangeText={setNumber}
              >
              </TextInput>
            </View>

            <View style={styles.DividerThick}>
            </View>

            {/* onPress -> go to ResetPassword page page navigation*/}
            <TouchableOpacity onPress={() => nav.push('Reset Password 1')}>
              <Text style={styles.ResetPass}>Reset Password</Text>
            </TouchableOpacity>

            <View style={styles.DividerThick}>
            </View>

          </View>
        </View>
      </Modal>
      </ImageBackground>
    </View>
  );
};

export default EditProfile;