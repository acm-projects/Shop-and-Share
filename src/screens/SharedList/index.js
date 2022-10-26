import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import NewListScreen from '../NewList';

import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  ImageBackground,
  Image,
  Touchable
}  from "react-native";

import colors from '../../../assets/colors/colors.js';
import styles from './styles.js';

export default Landing = () => {
    return (
        <ImageBackground source={require('../../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
            <Text style={styles.sectionTitle}>
                Shared Lists.
            </Text>
        <View style={styles.containter}>
            <View style={styles.centerDisplay}>
                <View style={styles.box}>
                    <Image 
                        source={require('../../../assets/images/Search_Inactive_Icon.png')}
                        style={{marginRight: 5, width: 12, height: 12}}
                    />
                    <Text style= {styles.sectionBottom}>
                        Search
                    </Text>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.sectionList}>
                        List Name
                    </Text>
                    <Text style={styles.sectionList2}>
                        Oct 07 2022
                    </Text>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.sectionList}>
                        List Name
                    </Text>
                    <Text style={styles.sectionList2}>
                        Oct 07 2022
                    </Text>
                </View>
            </View>
            <TouchableOpacity>
                    <View style={styles.addListButton}>
                        <Text style={styles.addList}>
                            Add a List
                        </Text>
                    </View>
                </TouchableOpacity>
        </View>
        </ImageBackground>
        )
    }