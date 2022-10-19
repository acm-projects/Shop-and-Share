import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  ImageBackground,
}  from "react-native";

import colors from '../../../assets/colors/colors.js';
import styles from './styles.js';

const HomeNoListScreen = () => {
    const navigation = useNavigation();
    return (
      <>
      <ImageBackground source={require('../../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
        <View>
          <SafeAreaView>
  
          <Text style={styles.NoLists}>
            You have no lists!
          </Text>
  
          <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home New List')}
                >
                <Text style={styles.buttonText}>
                    Add a List
                </Text>
            </TouchableOpacity>
          </View>
            
          </SafeAreaView>
        </View>
        </ImageBackground>
      </>
    )
  }

  export default HomeNoListScreen;