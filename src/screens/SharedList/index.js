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
import SearchableBar from '../../components/SearchBar.js';
import { ScrollView } from 'react-native-gesture-handler';

export default SharedList = () => {
    return (
        <ImageBackground source={require('../../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
            <TouchableOpacity style={styles.CancelContainer}>
            <Text style={styles.Cancel}>
                Cancel          
            </Text>
            </TouchableOpacity>
            <Text style={styles.sectionTitle}>
                Shared Lists.
            </Text>
        <View style={styles.containter}>
            <View style={styles.centerDisplay}>
                    <View style={{marginBottom: -10}}>
                        <SearchableBar/>
                    </View>
                
                    <ScrollView style = {{height: 580, marginBottom: 20}}>

                <TouchableOpacity>
                <View style={styles.box2}>
                    <Text style={styles.sectionList}>
                        List Name
                    </Text>
                    <Text style={styles.sectionList2}>
                        Oct 07 2022
                    </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box2}>
                    <Text style={styles.sectionList}>
                        List Name
                    </Text>
                    <Text style={styles.sectionList2}>
                        Oct 07 2022
                    </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.box2}>
                    <Text style={styles.sectionList}>
                        List Name
                    </Text>
                    <Text style={styles.sectionList2}>
                        Oct 07 2022
                    </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.box2}>
                    <Text style={styles.sectionList}>
                        List Name
                    </Text>
                    <Text style={styles.sectionList2}>
                        Oct 07 2022
                    </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={styles.box2}>
                    <Text style={styles.sectionList}>
                        List Name
                    </Text>
                    <Text style={styles.sectionList2}>
                        Oct 07 2022
                    </Text>
                </View>
                </TouchableOpacity>

                </ScrollView>
            </View>
        </View>
        </ImageBackground>
        )
    }