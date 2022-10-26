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

export default SignUp = () => {
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
                <TextInput placeholder="Email" style={styles.textInput}/>
                <TextInput placeholder="Password"  secureTextEntry={true} style={styles.textInput}/>
                <TextInput placeholder="Confirm Password"  secureTextEntry={true} style={styles.textInput}/>
            
                <TouchableOpacity>
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
