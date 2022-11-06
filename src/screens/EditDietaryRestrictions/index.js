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
  TextInput
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

              <TouchableOpacity
                    onPress={() => navigation.navigate('MyDietaryRestrictions')}
                >
                    <Text style={styles.saveText}>
                    Save
                    </Text>
                </TouchableOpacity>

                <Text style={styles.Title}>
                    My Dietary          Restrictions
                    </Text>

                    <TouchableOpacity
                    onPress={() => {}}
                    >
                    <View style={styles.nutContainer}>
                      <Text style={styles.BoldText}>
                          Nut Allergy
                      </Text>  
                  </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.fishContainer}>
                      <Text style={styles.Text}>
                          Fish Allergy
                      </Text>  
                </View>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.vegContainer}>
                      <Text style={styles.BoldText}>
                          Vegetarian
                      </Text>  
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.veganContainer}>
                      <Text style={styles.Text}>
                          Vegan
                      </Text>  
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.lactoseContainer}>
                      <Text style={styles.longText}>
                          Lactose        Intolerancy
                      </Text>  
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.glutenContainer}>
                      <Text style={styles.longText}>
                          Gluten         Intolerancy
                      </Text>  
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.ketoContainer}>
                      <Text style={styles.Text}>
                          Keto
                      </Text>  
                </View>
                </TouchableOpacity>


                <View style={styles.addContainer}>
                      <TextInput style={styles.AddText}
                          placeholder="+ Add New">
                      </TextInput>  
                </View>

          </SafeAreaView>
        </View>
        </ImageBackground>
      </>
    )
  }

  export default SetDietaryRestrictions;