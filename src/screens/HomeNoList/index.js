import * as React from 'react';
import { useNavigation } from "@react-navigation/core";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import colors from '../../../assets/colors/colors.js';
import styles from './styles.js';

const HomeNoListScreen = () => {
  const nav = useNavigation();

  return (
    <SafeAreaView>
      <ImageBackground source={require('../../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
        <View>
          <SafeAreaView>

            <Text style={styles.NoLists}>
              You have no lists!
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => nav.push('New List')}
              >
                <Text style={styles.buttonText}>
                  Add a List
                </Text>
              </TouchableOpacity>
            </View>

          </SafeAreaView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default HomeNoListScreen;