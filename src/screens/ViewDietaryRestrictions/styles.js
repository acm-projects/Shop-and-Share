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

import colors from '../../../assets/colors/colors.js';
import styles from './styles.js';

const SetDietaryRestrictions = () => {
    return (
      <>
      <ImageBackground source={require('../../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
        <View>
          <SafeAreaView>

              <View style={styles.EditProfileContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeNoList')}
                >
                    <Text style={styles.cancelText}>
                    Cancel
                    </Text>
                </TouchableOpacity>
              </View>

                <Text style={styles.Title}>
                    Melissa's Dietary Restrictions
                    </Text>

                    <View style={styles.nutContainer}>
                  <TouchableOpacity
                    onPress={() => {}}
                    >
                      <Text style={styles.Text}>
                          Nut Allergy
                      </Text>  
                      <Text style={styles.Description}>
                          Peanuts
                      </Text> 
                  </TouchableOpacity>
                </View>

                <View style={styles.fishContainer}>
                  <TouchableOpacity
                    onPress={() => {}}
                    >
                      <Text style={styles.Text}>
                          Fish Allergy
                      </Text>  
                      <Text style={styles.Description}>
                            Salmon
                      </Text>  
                  </TouchableOpacity>
                </View>

                <View style={styles.vegContainer}>
                  <TouchableOpacity
                    onPress={() => {}}
                    >
                      <Text style={styles.Text}>
                          Vegetarian
                      </Text>  
                  </TouchableOpacity>
                </View>

          </SafeAreaView>
        </View>
        </ImageBackground>
      </>
    )
  }

  export default SetDietaryRestrictions;
