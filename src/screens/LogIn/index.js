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
import colors from '../../../assets/colors/colors.js';
import styles from './styles.js';

export default LogIn = () => {
    return (
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
                <TextInput placeholder="email" style={styles.textInput}/>
                <TextInput placeholder="password"  secureTextEntry={true} style={styles.textInput}/>
                </View>
                <Text style={styles.forgotPass}>
                    Forgot password?
                </Text>

                <TouchableOpacity>
                    <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Next
                            </Text>
                    </View>
                </TouchableOpacity>
                

                <View style={{alignItems: 'center'}}>
                <TouchableOpacity>
                    <Text style={styles.signUp}>
                        Don't have an account?
                        <Text style={{color: colors.dpurp}}>
                            {' '} Sign up
                        </Text>            
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    </ImageBackground>
    )
}

