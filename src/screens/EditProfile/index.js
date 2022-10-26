import { useState } from "react";
import * as React from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image
} from "react-native";

import colors from "../../../assets/colors/colors.js";
import styles from "./styles.js";
import { TextInput } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';

const db = firestore().collection('Users');

const EditProfile = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleSubmit = () => {

  }

  return (
    <View>
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
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.CancelButton}>Cancel</Text>
              </TouchableOpacity>

              {/*onPress -> save user info*/}
              <TouchableOpacity
                onPress={handleSubmit}>
                <Text style={styles.SaveButton}>Save</Text>
              </TouchableOpacity>
            </View>

            {/* onPress -> change profile photo*/}
            <TouchableOpacity>
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
              <TextInput style={styles.Input}
                placeholder="First Name">
              </TextInput>
            </View>

            <View style={styles.DividerThin}>
            </View>

            <View style={styles.AlignHeaderAndInput}>
              <Text style={styles.Header}>Last Name</Text>
              <TextInput style={styles.Input}
                placeholder="Last Name">
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
              <Text style={styles.Header}>Email</Text>
              <TextInput style={styles.Input}
                placeholder="Email"
                autoCapitalize='none'>
              </TextInput>
            </View>

            <View style={styles.DividerThin}>
            </View>

            <View style={styles.AlignHeaderAndInput}>
              <Text style={styles.Header}>Phone Number</Text>
              <TextInput style={styles.Input}
                placeholder="Phone Number"
                keyboardType='numeric'>
              </TextInput>
            </View>

            <View style={styles.DividerThick}>
            </View>

            {/* onPress -> go to ResetPassword page page navigation*/}
            <TouchableOpacity>
              <Text style={styles.ResetPass}>Reset Password</Text>
            </TouchableOpacity>

            <View style={styles.DividerThick}>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditProfile;

