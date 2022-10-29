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

          <View style={styles.Logo}>
              <Image source={require('../../../assets/images/Logo_Full.png')} />
            </View>
        
            <View style={styles.DietContainer}>
                <Text style={styles.questionText}>
                      What are your                     dietary restrictions?
                      </Text>

                <TouchableOpacity
                onPress={() => {}}
                >
                <View style={styles.nutContainer}>
                      <Text style={styles.Text}>
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
                      <Text style={styles.Text}>
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

                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.addContainer}>
                      <TextInput style={styles.AddText}
                        placeholder="+ Add New">
                      </TextInput>  
                </View>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.nextContainer}>
                      <Text style={styles.nextText}>
                          Next
                      </Text>  
                </View>
                </TouchableOpacity>


                </View>

          </SafeAreaView>
        </View>
        </ImageBackground>
      </>
    )
  }

  export default SetDietaryRestrictions;