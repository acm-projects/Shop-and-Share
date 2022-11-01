import * as React from "react";
//import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    Image,
    FlatList,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    useState,
    useEffect,
    Button
} from 'react-native';
import colors from '../../../assets/colors/colors.js';
import styles from './styles.js';
import auth from '@react-native-firebase/auth'; // Authentication import
import { useNavigation } from "@react-navigation/core";

// user auth function

export default LogIn = () => {
    /*
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

  // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;
    */

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const nav = useNavigation();


    const doLogIn = async (email, password) => {
        try {
            let response = await auth().signInWithEmailAndPassword(email, password)
            if (response && response.user) {
                nav.replace("Home")
            }
        } catch (e) {
            console.error(e.message)
        }
    }


    loginTemp = (email, password) => {
        alert('email: ' + email + ' password: ' + password)
    }

    return (
        <ImageBackground
            source={require('../../../assets/images/Background.jpg')}
            style={styles.ImageBackground}>

            {/* onPress -> go back to landing page */}
            <TouchableOpacity
                style={styles.CancelContainer}
                onPress={() => nav.pop()}
            >
                <Text style={styles.Cancel}>
                    Cancel
                </Text>
            </TouchableOpacity>

            <View style={styles.container}>
                <View style={styles.logoView}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/images/Logo_Full.png')}
                    />
                </View>
                <View style={styles.centerDisplay}>
                    <Text style={styles.sectionTitle}>
                        Log in.
                    </Text>
                    <View style={styles.input}>
                        <TextInput placeholder="email" style={styles.textInput} onChangeText={text => { setEmail(text) }} />
                        <TextInput placeholder="password" secureTextEntry={true} style={styles.textInput} onChangeText={text => { setPassword(text) }} />
                    </View>
                    <Text style={styles.forgotPass}>
                        Forgot password?
                    </Text>

                    <TouchableOpacity onPress={() => doLogIn(email, password)}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Log In
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Text style={styles.signUp}>
                                Don't have an account?
                                <Text style={{ color: colors.dpurp }}>
                                    {' '} Sign up
                                </Text>
                            </Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>
        </ImageBackground >
    )

}
