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
    Logo: {
        textAlign: 'right',
        position: 'absolute',
            right: 60,
            top: 24,
      },
    cancelText: {  
        color: colors.pureWhite,      
        fontFamily: 'Montserrat-Medium',
        position: 'absolute',
           left: 10,
           top: 8,
    },
    DietContainer: {
        backgroundColor: colors.pureWhite,
        width: '100%',
        height: 800,
        position: 'absolute',
            top: 180,
        borderRadius: 30,
    },
    questionText: {  
        color: colors.pureBlack,      
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        paddingLeft: 27,
        paddingRight: 18, 
        paddingTop: 15,
        paddingBottom: 30,
        //position: 'absolute',
           //left: 10,
           //top: 8,
    },
    Text: {
        fontFamily: 'Montserrat-Medium',
        color: colors.pureBlack,
        position: 'absolute',
            left: 16,
            top: 66,
        alignSelf: "flex-end",
        fontSize: 16,
        paddingBottom: 10,
    },

    longText: {
        fontFamily: 'Montserrat-Medium',
        color: colors.pureBlack,
        position: 'absolute',
            left: 16,
            top: 47,
        alignSelf: "flex-end",
        fontSize: 16,
        paddingBottom: 10,
    },

    nutContainer: {
        height: 100,
        width: 160,
        position: 'absolute',
            right: 206,
            top: 90,
        backgroundColor: colors.pureWhite,
        borderRadius: 18,
        elevation: 0,
        borderWidth: 1,
        borderColor: "#C7C7C7",
    },

    fishContainer: {
        height: 100,
        width: 160,
        position: 'absolute',
            right: 25,
            top: 90,
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
            top: 205,
        backgroundColor: colors.pureWhite,
        borderRadius: 18,
        elevation: 0,
        borderWidth: 1,
        borderColor: "#C7C7C7",
    },

    veganContainer: {
        height: 100,
        width: 160,
        position: 'absolute',
            right: 25,
            top: 205,
        backgroundColor: colors.pureWhite,
        borderRadius: 18,
        elevation: 0,
        borderWidth: 1,
        borderColor: "#C7C7C7",
    },

    lactoseContainer: {
        height: 100,
        width: 160,
        position: 'absolute',
            right: 206,
            top: 320,
        backgroundColor: colors.pureWhite,
        borderRadius: 18,
        elevation: 0,
        borderWidth: 1,
        borderColor: "#C7C7C7",
    },

    glutenContainer: {
        height: 100,
        width: 160,
        position: 'absolute',
            right: 25,
            top: 320,
        backgroundColor: colors.pureWhite,
        borderRadius: 18,
        elevation: 0,
        borderWidth: 1,
        borderColor: "#C7C7C7",
    },

    ketoContainer: {
        height: 100,
        width: 160,
        position: 'absolute',
            right: 206,
            top: 435,
        backgroundColor: colors.pureWhite,
        borderRadius: 18,
        elevation: 0,
        borderWidth: 1,
        borderColor: "#C7C7C7",
    },

    addContainer: {
        height: 100,
        width: 160,
        position: 'absolute',
            right: 25,
            top: 435,
        backgroundColor: colors.pureWhite,
        borderRadius: 18,
        elevation: 0,
        borderWidth: 1,
        borderColor: "#C7C7C7",
    },

    nextContainer: {
        height: 42,
        width: 315,
        position: 'absolute',
            right: 40,
            top: 550,
            //top: 510,
        backgroundColor: colors.next,
        borderRadius: 10,
        elevation: 0,
        borderWidth: 1,
        borderColor: "#8271EF",
    },

    nextText: {
        color: colors.pureWhite,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 9,
    },
});

export default styles;