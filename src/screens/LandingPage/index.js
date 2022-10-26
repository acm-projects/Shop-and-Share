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
    <View style={styles.container}>
        <View style={styles.centerDisplay}>
                <View style={styles.logo}>
                    <Image 
                        source={require('../../../assets/images/Logo_Big.png')}
                    />
                </View>
                <Text style={styles.sectionTitle}>
                    Shop easy.
                </Text>
                <Text style={styles.sectionTitle}>
                    Share easy.
                </Text>
                <View style={styles.options}>
                    <TouchableOpacity>
                    <View style={styles.box}>
                        <Image 
                            source={require('../../../assets/images/google.png')}
                            style={{marginRight: 5}}
                        />
                        <Text style= {styles.sectionBottom}>
                            Continue with Google
                        </Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.box}>
                        <Image 
                            source={require('../../../assets/images/apple.png')}
                            style={{marginRight: 5}}
                        />
                        <Text style= {styles.sectionBottom}>
                            Continue with Apple
                        </Text>
                    </View>
                    </TouchableOpacity>
                    <Image 
                        source={require('../../../assets/images/boxOr.png')}
                    />
                    <TouchableOpacity>
                        <View style={styles.box2}>
                            <Text style={styles.sectionBottom}>
                                Log In
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.accnt}>
                         Don't have an account?
                        <Text style={{color: colors.dpurp}}>
                        {' '} Sign up
                        </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
        </View> 
    </View>
    )
}