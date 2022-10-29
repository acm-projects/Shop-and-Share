import * as React from 'react';

import { 
  StyleSheet,   
}  from "react-native";

import colors from '../../../assets/colors/colors.js';

const styles = StyleSheet.create({
    ImageBackground: {
        height: "100%",
        width: "100%",
    },
    Header: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        color: colors.pureBlack,
        marginLeft: 38,
        marginTop: 100,
        marginBottom: 15
    },
    Container: {
        backgroundColor: colors.pureWhite,
        width: '100%',
        height: 700,
        position: 'absolute',
            top: 130,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    InfoText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: colors.pureBlack,
        marginHorizontal: 38,
        marginBottom: 20,
    },
    EmailInput: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
        marginHorizontal: 38,
        marginBottom: -10
    },
    DividerThin: {
        backgroundColor: colors.darkDivider,
        width: 320,
        height: 2,
        marginBottom: 35,
        borderRadius: 3,
        marginHorizontal: 38,
    },
    buttonContainer: {
        height: 42,
        backgroundColor: colors.primaryPurple,
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 4,
        marginHorizontal: 38,
      },
      buttonText: {
        color: colors.pureWhite,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        fontSize: 17,
      },
      Logo: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 25,
      },
      cancelProcess: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      cancelText: {
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        fontSize: 13,
        marginTop: 15
      }
    
  });

  export default styles;