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
  TextInput,
  ScrollView
}  from "react-native";

import colors from '../../../assets/colors/colors.js';
import styles from './styles.js';

const EditDietaryRestrictions = () => {
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

                <ScrollView style={styles.scrollView}> 
                <View style={styles.GridView}>
                  <TouchableOpacity
                    onPress={() => {}}
                    >
                     <View style={styles.container}>
                      <Text style={styles.BoldText}>
                          Nut Allergy
                      </Text>  
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                      onPress={() => {}}
                      >
                    <View style={styles.container}>
                        <Text style={styles.Text}>
                            Fish Allergy
                        </Text>  
                    </View>
                  </TouchableOpacity>                  

                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.container}>
                      <Text style={styles.BoldText}>
                          Vegetarian
                      </Text>  
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.container}>
                      <Text style={styles.Text}>
                          Vegan
                      </Text>  
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.container}>
                      <Text style={styles.longText}>
                          Lactose        Intolerancy
                      </Text>  
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.container}>
                      <Text style={styles.longText}>
                          Gluten         Intolerancy
                      </Text>  
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.container}>
                      <Text style={styles.Text}>
                          Keto
                      </Text>  
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.container}>
                      <Text style={styles.Text}>
                          Kosher
                      </Text>  
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.container}>
                      <Text style={styles.Text}>
                          Pescatarianism
                      </Text>  
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.container}>
                      <Text style={styles.Text}>
                          Shellfish
                      </Text>  
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {}}
                    >
                <View style={styles.container}>
                      <Text style={styles.Text}>
                          Soy
                      </Text>  
                </View>
                </TouchableOpacity>


                <View style={styles.container}>
                      <TextInput style={styles.AddText}
                          placeholder="+ Add New">
                      </TextInput>  
                </View>

                </View>
                </ScrollView>

          </SafeAreaView>
        </View>
        </ImageBackground>
      </>
    )
  }

  export default EditDietaryRestrictions;