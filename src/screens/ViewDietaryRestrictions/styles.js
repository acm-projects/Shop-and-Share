import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  StyleSheet,
} from "react-native";

import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
    ImageBackground: {
        height: "100%",
        width: "100%",
    },
    cancelText: {  
        color: colors.pureWhite,      
        fontFamily: 'Montserrat-Medium',
        position: 'absolute',
           left: 10,
           top: 8,
    },
    saveText: {  
        color: colors.pureWhite,      
        fontFamily: 'Montserrat-Bold',
        position: 'absolute',
           left: 345,
           top: 8,
    },
    Title: {  
        color: colors.pureWhite,      
        fontFamily: 'Montserrat-Bold',
        position: 'absolute',
           left: 30,
           top: 60,
        fontSize: 32,
    },
    Text: {
        fontFamily: 'Montserrat-SemiBold',
        color: colors.pureBlack,
        position: 'absolute',
            left: 16,
            top: 10,
        alignSelf: "flex-end",
        fontSize: 16,
        paddingBottom: 10,
    },

    Description: {
        fontFamily: 'Montserrat-Medium',
        color: colors.pureBlack,
        position: 'absolute',
            left: 16,
            top: 32,
        alignSelf: "flex-end",
        fontSize: 16,
        paddingBottom: 10,
    },

    nutContainer: {
        height: 100,
        width: 160,
        position: 'absolute',
            right: 206,
            top: 160,
        backgroundColor: colors.pureWhite,
        borderRadius: 18,
    },

    fishContainer: {
        height: 100,
        width: 160,
        position: 'absolute',
            right: 25,
            top: 160,
        backgroundColor: colors.pureWhite,
        borderRadius: 18,
        elevation: 0,
        borderWidth: 1,
        borderColor: "#C7C7C7",
    },

    vegContainer: {
        height: 100,
        width: 160,
        position: 'absolute',
            right: 206,
            top: 275,
        backgroundColor: colors.pureWhite,
        borderRadius: 18,
    },


    saveButtonText: {
        color: colors.black,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 9,
    },
});

export default styles;
