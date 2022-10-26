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

          <View style={styles.Logo}>
              <Image source={require('../../../assets/images/Logo_Full.png')} />
            </View>
        
            <View style={styles.DietContainer}>
                <Text style={styles.questionText}>
                      What are your                     dietary restrictions?
                      </Text>

                <View style={styles.nutContainer}>
                  <TouchableOpacity
                    onPress={() => {}}
                    >
                      <Text style={styles.Text}>
                          Nut Allergy
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

                <View style={styles.veganContainer}>
                  <TouchableOpacity
                    onPress={() => {}}
                    >
                      <Text style={styles.Text}>
                          Vegan
                      </Text>  
                  </TouchableOpacity>
                </View>

                <View style={styles.lactoseContainer}>
                  <TouchableOpacity
                    onPress={() => {}}
                    >
                      <Text style={styles.longText}>
                          Lactose        Intolerancy
                      </Text>  
                  </TouchableOpacity>
                </View>

                <View style={styles.glutenContainer}>
                  <TouchableOpacity
                    onPress={() => {}}
                    >
                      <Text style={styles.longText}>
                          Gluten         Intolerancy
                      </Text>  
                  </TouchableOpacity>
                </View>

                <View style={styles.ketoContainer}>
                  <TouchableOpacity
                    onPress={() => {}}
                    >
                      <Text style={styles.Text}>
                          Keto
                      </Text>  
                  </TouchableOpacity>
                </View>

                <View style={styles.addContainer}>
                  <TouchableOpacity
                    onPress={() => {}}
                    >
                      <Text style={styles.Text}>
                          + Add New
                      </Text>  
                  </TouchableOpacity>
                </View>

                <View style={styles.nextContainer}>
                  <TouchableOpacity
                    onPress={() => {}}
                    >
                      <Text style={styles.nextText}>
                          Next
                      </Text>  
                  </TouchableOpacity>
                </View>

                </View>

          </SafeAreaView>
        </View>
        </ImageBackground>
      </>
    )
  }

  export default SetDietaryRestrictions;