import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { 
  StyleSheet,   
}  from "react-native";

import colors from '../../../assets/colors/colors.js';

const styles = StyleSheet.create({
    ImageBackground: {
        height: "100%",
        width: "100%",
    },
    CenterItems: {
      alignItems: "center",
    },
    Logo: {
      marginTop: 10,
      marginBottom: 15
    },
    Header: {
      fontFamily: "Montserrat-Bold",
      color: colors.pureWhite,
    },
    LeftCenter: {
      justifyContent: "flex-start",
    },
    ButtonContainer: {
      backgroundColor: colors.pureWhite,
      height: 70,
      marginHorizontal: 10,
      borderRadius: 14,
      width: 353
  },
  DisplayName: {
      fontFamily: "Montserrat-Bold",
      fontSize: 12,
      color: colors.pureWhite,
      marginTop: 17,
      marginLeft: 9,
      marginRight: 15
  },
  UserName: {
      fontFamily: "Montserrat-Regular",
      color: colors.lightDivider,
      fontSize: 11,
      marginLeft: 9
  },
  FriendProfilePhoto: {
      width: 45,
      height: 45,
      borderRadius: 50,
      marginTop: 10
  },
  AlignItems: {
      justifyContent: "flex-start",
      flexDirection: "row"
  },
  AlignWithButton: {
      justifyContent: "space-between",
      flexDirection: "row"
  },
  AddButton: {
      marginTop: 20,
      marginRight: 10
  },
  ScrollableSection: {
    marginTop: 90,
    marginHorizontal: 23,
    height: 490
  }
  });

  export default styles;