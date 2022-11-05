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
} from "react-native";

import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/core";
import { firebase } from '@react-native-firebase/auth';
import colors from '../../../assets/colors/colors.js';
import styles from './styles.js';


const ViewDietaryRestrictions = () => {
  const nav = useNavigation();
  const user = firestore().collection('Users').doc(firebase.auth().currentUser?.email);

  const [list, setList] = React.useState([]);

  React.useLayoutEffect(() => {
    createList();
  }, [])

  const createList = () => {
    user.get().then(query => {
      setList(query.data().dietaryRestrictions);

      console.log(list);
    })
  }

  return (
    <>
      <ImageBackground source={require('../../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
        <View>
          <SafeAreaView>

            <View style={styles.EditProfileContainer}>
              <TouchableOpacity
                onPress={() => nav.pop()}
              >
                <Text style={styles.cancelText}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.Title}>
              My Dietary Restrictions
            </Text>

            {
              list.map((item) =>
                <TouchableOpacity
                  key={item} onPress={() => { }}
                >
                  <View style={styles.nutContainer}>
                    <Text style={styles.Text}>
                      {item}
                    </Text>
                    {/* <Text style={styles.Description}>
                      Peanuts
                    </Text> */}
                  </View>
                </TouchableOpacity>
              )
            }

            {/* <TouchableOpacity
              onPress={() => { }}
            >
              <View style={styles.nutContainer}>
                <Text style={styles.Text}>
                  Nut Allergy
                </Text>
                <Text style={styles.Description}>
                  Peanuts
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => { }}
            >
              <View style={styles.fishContainer}>
                <Text style={styles.Text}>
                  Fish Allergy
                </Text>
                <Text style={styles.Description}>
                  Salmon
                </Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => { }}
            >
              <View style={styles.vegContainer}>
                <Text style={styles.Text}>
                  Vegetarian
                </Text>
              </View>
            </TouchableOpacity> */}

          </SafeAreaView>
        </View>
      </ImageBackground>
    </>
  )
}

export default ViewDietaryRestrictions;
