import * as React from "react";
import { Text, 
    StyleSheet, 
    View, 
    SafeAreaView, 
    Image, 
    FlatList, 
    ImageBackground, 
    TextInput,
    TouchableOpacity
}  from 'react-native';

import styles from "./styles";
import auth from '@react-native-firebase/auth'; // Authentication import

export default SignUp = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const doSignIn = async (email, password, confirmPassword) => {
        if (password == confirmPassword){
            try {
                let response = await auth().createUserWithEmailAndPassword(email, password)
                if (response && response.user) {
                  alert ('user is signed in')
                  //Navigate to Part 2 of signup page
                }
              } catch (e) {
                console.error(e.message)
            }

        }
        else{
            alert ('Password and Confirm Password do not match')
        }
        
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/Background.jpg')}
                style={styles.ImageBackground}
            >
            
            {/* onPress -> go back to landing page */}
            <TouchableOpacity style={styles.CancelContainer}>
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
                <TextInput placeholder="First Name" style={styles.textInput}/>
                <TextInput placeholder="Last Name" style={styles.textInput}/>
                <TextInput placeholder="Phone Number" style={styles.textInput}/>
                <TextInput placeholder="Email" style={styles.textInput} onChangeText={text => {setEmail(text)}} />
                <TextInput placeholder="Password"  secureTextEntry={true} style={styles.textInput} onChangeText={text => {setPassword(text)}}/>
                <TextInput placeholder="Confirm Password"  secureTextEntry={true} style={styles.textInput} onChangeText={text => {setConfirmPassword(text)}}/>
            
                <TouchableOpacity onPress = {() => doSignIn(email, password, confirmPassword)}>
                    <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Next
                            </Text>
                    </View>
                </TouchableOpacity>
                
            </View>
            </ImageBackground>
        </View>
    )
}
