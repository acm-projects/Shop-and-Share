import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet } from "react-native";

import colors from '../../../assets/colors/colors.js';

const styles = StyleSheet.create({
    ImageBackground: {
        height: "100%",
        width: "100%",
    },
    containter: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: "100%",
        length: "100%",

    },
    sectionTitle: {
        fontSize: 40,
        color: colors.light,
        fontFamily: 'Montserrat-Bold',
        alignItems: 'center',
        padding: 25,
        marginTop: 60,
    },
    centerDisplay: {
        paddingBottom: 100,
        paddingHorizontal: 13,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: "100%",
        length: "100%",
    },
    options: {
        paddingTop: 20,
        paddingBottom: 50,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        paddingBottom: 50,
    },
    box: {
        width: 330,
        height: 30,
        backgroundColor: colors.lightDivider,
        borderRadius: 20,
        color: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    box2: {
        width: 330,
        height: 110,
        marginTop: 20,
        paddingTop: 40,
        backgroundColor: colors.white,
        borderRadius: 20,
        color: colors.white,
        padding: 20,
    },
    sectionBottom: {
        fontSize: 12,
        color: colors.grey,
        fontFamily: 'Montserrat-Regular',
    },
    sectionList: {
        fontSize: 25,
        color: colors.black,
        fontFamily: 'Montserrat-Medium',
    },
    sectionList2: {
        fontSize: 15,
        color: colors.grey,
        fontFamily: 'Montserrat-Regular',
    },
    pin: {
        width: 25,
        legnth: 25,
        float: 'right',
        position: 'absolute',
        right: 0,
        margin: 15,
    },
    noPin: {
        width: 0,
        height: 0
    },
    addListButton: {
        width: 200,
        height: 50,
        backgroundColor: colors.lightDivider,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    addList: {
        fontSize: 20,
        color: colors.lpurp,
        fontFamily: 'Montserrat-SemiBold',
    }
});

export default styles;

