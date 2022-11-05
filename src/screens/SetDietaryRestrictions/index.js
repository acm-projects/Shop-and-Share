import * as React from 'react';
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

                        {/* <View style={styles.EditProfileContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('HomeNoList')}
                            >
                                <Text style={styles.cancelText}>
                                Cancel
                                </Text>
                            </TouchableOpacity>
                        </View> */}

                        <View style={styles.Logo}>
                            <Image source={require('../../../assets/images/Logo_Full.png')} />
                        </View>

                        <View style={styles.DietContainer}>
                            <Text style={styles.questionText}>
                                What are your{'\n'}dietary restrictions?
                            </Text>

                            <TouchableOpacity
                                onPress={() => changeRestriction(nut, setNut)}
                            >
                                <View style={styles.nutContainer}>
                                    <Text style={styles.Text}>
                                        Nut Allergy
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => changeRestriction(fish, setFish)}
                            >
                                <View style={styles.fishContainer}>
                                    <Text style={styles.Text}>
                                        Fish Allergy
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => changeRestriction(veg, setVeg)}
                            >
                                <View style={styles.vegContainer}>
                                    <Text style={styles.Text}>
                                        Vegetarian
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => changeRestriction(vegan, setVegan)}
                            >
                                <View style={styles.veganContainer}>
                                    <Text style={styles.Text}>
                                        Vegan
                                    </Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={() => changeRestriction(lactose, setLactose)}
                            >
                                <View style={styles.lactoseContainer}>
                                    <Text style={styles.longText}>
                                        Lactose        Intolerancy
                                    </Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={() => changeRestriction(gluten, setGluten)}
                            >
                                <View style={styles.glutenContainer}>
                                    <Text style={styles.longText}>
                                        Gluten         Intolerancy
                                    </Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={() => changeRestriction(keto, setKeto)}
                            >
                                <View style={styles.ketoContainer}>
                                    <Text style={styles.Text}>
                                        Keto
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { }}
                            >
                                <View style={styles.addContainer}>
                                    <TextInput
                                        style={styles.AddText}
                                        placeholder="+ Add New"
                                        value={addNew}
                                        onChangeText={setAddNew}
                                    >
                                    </TextInput>
                                </View>
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

                    </SafeAreaView>
                </View>
            </ImageBackground>
        </>
    )
}

export default SetDietaryRestrictions;