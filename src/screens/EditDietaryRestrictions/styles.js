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
        fontFamily: 'Montserrat-Medium',
        color: colors.pureBlack,
        position: 'absolute',
            left: 16,
            top: 66,
        alignSelf: "flex-end",
        fontSize: 16,
        paddingBottom: 10,
    },

    BoldText: {
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

    container: {
        height: 100,
        width: 160,
        backgroundColor: colors.pureWhite,
        borderRadius: 18,
        marginBottom: 15,
    },

    AddText: {
        fontFamily: 'Montserrat-Medium',
        color: colors.pureBlack,
        position: 'absolute',
            left: 10,
            top: 50,
        fontSize: 15,
        width: 100,
        paddingBottom: 10,
    },
    GridView: {
        flex: 1, 
        flexDirection: "row", 
        flexWrap: 'wrap',
        justifyContent: "space-between", 
    },
    scrollView: {
        height: 600, 
        marginTop: 150, 
        marginHorizontal: 25
    }
});

export default styles;