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
        paddingBottom: 13,
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
    AddText: {
        fontFamily: 'Montserrat-Medium',
        color: colors.pureBlack,
        position: 'absolute',
            left: 16,
            top: 50,
        fontSize: 15,
        width: 100,
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

    container: {
        height: 100,
        width: 160,
        marginBottom: 10,
        backgroundColor: colors.pureWhite,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#C7C7C7",
    },

    nextContainer: {
        height: 42,
        width: 315,
        marginLeft: 15,
        marginTop: 10,
        backgroundColor: colors.primaryPurple,
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

    containerPress: {
        height: 100,
        width: 160,
        marginBottom: 10,
        backgroundColor: colors.pureWhite,
        borderRadius: 18,
        borderWidth: 3,
        borderColor: colors.primaryPurple,
    },

    GridView: {
        flex: 1, 
        flexDirection: "row", 
        flexWrap: 'wrap',
        justifyContent: "space-between", 
    },

    scrollView: {
        height: 600, 
        marginHorizontal: 25
    }
});

export default styles;