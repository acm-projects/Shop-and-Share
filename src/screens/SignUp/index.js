import * as React from "react";
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
    Keyboard
} from 'react-native';

import styles from "./styles";
import auth from '@react-native-firebase/auth'; // Authentication import
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/core";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";


const db = firestore().collection('Users');

export default SignUp = () => {
    const nav = useNavigation();

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');

    const [userEmail, setUserEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const doSignIn = () => {
        if (password == confirmPassword) {
            if (firstName == '' || lastName == '' || phoneNumber == '' || userEmail == '') {
                alert("All fields are required");

            } else {
                try {
                    let response = auth()
                        .createUserWithEmailAndPassword(userEmail, password)
                        .then(userCredentials => {
                            const user = userCredentials.user;
                            db.doc(userEmail).set({
                                email: userEmail,
                                firstName: firstName,
                                lastName: lastName,
                                phone: phoneNumber,
                            })
                            nav.push("Sign Up 2")
                        })
                    if (response && response.user) {
                        alert('user is signed in')
                        //Navigate to Part 2 of signup page
                    }
                } catch (e) {
                    console.error(e.message)
                }
            }
        }
        else {
            alert('Password and Confirm Password do not match')
        }

    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/Background.jpg')}
                style={styles.ImageBackground}
            >

                {/* onPress -> go back to landing page */}
                <TouchableOpacity
                    style={styles.CancelContainer}
                    onPress={() => nav.pop()}
                >
                    <Text style={styles.Cancel}>
                        Cancel
                    </Text>
                </TouchableOpacity>

                <View style={styles.logoView}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/images/Logo_Full.png')}
                    />
                </View>
                <View style={styles.centerDisplay}>
                    <Text style={styles.sectionTitle}>
                        Create your account.
                    </Text>
                    <TextInput
                        placeholder="First Name"
                        style={styles.textInput}
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                    <TextInput
                        placeholder="Last Name"
                        style={styles.textInput}
                        value={lastName}
                        onChangeText={setLastName}
                    />
                    <TextInput
                        placeholder="Phone Number"
                        style={styles.textInput}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType='phone-pad'
                    />
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        value={userEmail}
                        onChangeText={setUserEmail}
                        keyboardType='email-address'
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        style={styles.textInput}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TextInput
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        style={styles.textInput}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <TouchableOpacity onPress={doSignIn}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Next
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
