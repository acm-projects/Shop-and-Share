import * as React from 'react';
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ImageBackground,
    TextInput
} from "react-native";

import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/core";
import { firebase } from '@react-native-firebase/auth';
import colors from '../../../assets/colors/colors.js';
import styles from './styles.js';

const db = firestore().collection('Users');

const SetDietaryRestrictions = () => {
    const nav = useNavigation();
    const user = firebase.auth().currentUser?.email;

    const [nut, setNut] = React.useState(false);
    const [fish, setFish] = React.useState(false);
    const [veg, setVeg] = React.useState(false);
    const [vegan, setVegan] = React.useState(false);
    const [lactose, setLactose] = React.useState(false);
    const [gluten, setGluten] = React.useState(false);
    const [keto, setKeto] = React.useState(false);
    const [addNew, setAddNew] = React.useState('');

    const changeRestriction = (buttonType, setButtonType) => {
        if (buttonType) {
            setButtonType(false);
        } else {
            setButtonType(true);
        }
    }

    const submitRestrictions = () => {
        const curUser = db.doc(user);
        const output = []

        if (nut)
            output.push('Nut Allergy');
        if (fish)
            output.push('Fish Allergy');
        if (veg)
            output.push('Vegetarian');
        if (vegan)
            output.push('Vegan');
        if (lactose)
            output.push("Lactose Intolerancy");
        if (gluten)
            output.push('Gluten Intolerancy');
        if (keto)
            output.push('Keto');
        if (addNew != '')
            output.push(addNew)


        curUser.update('dietaryRestrictions', output);

        nav.replace('Home No List');
    }


    return (
        <>
            <ImageBackground source={require('../../../assets/images/Background.jpg')}
                style={styles.ImageBackground}>
                <View>
                    <SafeAreaView>

                        <View style={styles.Logo}>
                            <Image source={require('../../../assets/images/Logo_Full.png')} />
                        </View>

                        <View style={styles.DietContainer}>
                            <Text style={styles.questionText}>
                                What are your{'\n'}dietary restrictions?
                            </Text>
                        
                        <View style={styles.scrollView}>
                        <View style={styles.GridView}>
                            <TouchableOpacity
                                style={nut ? styles.containerPress : styles.container}
                                onPress={() => {changeRestriction(nut, setNut)}}
                            >
                                <Text style={styles.Text}>
                                    Nut Allergy
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={fish ? styles.containerPress : styles.container}
                                onPress={() => changeRestriction(fish, setFish)}
                            >
                                <Text style={styles.Text}>
                                    Fish Allergy
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={veg ? styles.containerPress : styles.container}
                                onPress={() => changeRestriction(veg, setVeg)}
                            >
                                <Text style={styles.Text}>
                                    Vegetarian
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={vegan ? styles.containerPress : styles.container}
                                onPress={() => changeRestriction(vegan, setVegan)}
                            >
                                <Text style={styles.Text}>
                                    Vegan
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity
                                style={lactose ? styles.containerPress : styles.container}
                                onPress={() => changeRestriction(lactose, setLactose)}
                            >
                                <Text style={styles.longText}>
                                    Lactose        Intolerancy
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity
                                style={gluten ? styles.containerPress : styles.container}
                                onPress={() => changeRestriction(gluten, setGluten)}
                            >
                                <Text style={styles.longText}>
                                    Gluten         Intolerancy
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity
                                style={keto ? styles.containerPress : styles.container}
                                onPress={() => changeRestriction(keto, setKeto)}
                            >
                                <Text style={styles.Text}>
                                    Keto
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={addNew ? styles.containerPress : styles.container}
                                onPress={() => { }}
                            >
                                <TextInput
                                    style={styles.AddText}
                                    placeholder="+ Add New"
                                    value={addNew}
                                    onChangeText={setAddNew}
                                >
                                </TextInput>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => submitRestrictions()}
                            >
                                <View style={styles.nextContainer}>
                                    <Text style={styles.nextText}>
                                        Next
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            </View>
                        </View>



                        </View>

                    </SafeAreaView>
                </View>
            </ImageBackground>
        </>
    )
}

export default SetDietaryRestrictions;