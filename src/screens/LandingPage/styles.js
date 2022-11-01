import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {StyleSheet}  from "react-native";

import colors from '../../../assets/colors/colors.js';

const styles = StyleSheet.create({
    containter: {
        flex: 1,
    },
    sectionTitle: {
      fontSize: 40,
      color: colors.light,
      fontFamily: 'Montserrat-Bold', 
      alignItems: 'center',
    },
    centerDisplay: {
        paddingTop: 140,
        paddingBottom: 150,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width:"100%",
        length: "100%",
        alignItems: 'center',
        backgroundColor: colors.dark,
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
        width: 315,
        height: 40,
        margin: 8,
        borderColor:colors.light, 
        borderWidth:2,
        borderRadius: 20,
        color: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    box2: {
        width: 315,
        height: 40,
        margin: 8,
        backgroundColor: colors.lpurp,
        borderRadius: 20,
        color: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionBottom: {
        fontSize: 16,
        color: colors.light,
        fontFamily: 'Montserrat-Bold', 
    },
    accnt: {
        fontSize: 12,
        color: colors.light,
        fontFamily: 'Montserrat-Bold',
    },
  });

  export default styles;

