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
  
    NoLists: {
      textAlign: 'center',
      marginTop: 274,
      fontFamily: 'Montserrat-Medium',
      fontSize: 30,
      color: colors.pureWhite,
      paddingBottom: 18,
    },
  
    buttonContainer: {
      height: 45,
      marginHorizontal: 80,
      backgroundColor: colors.pureWhite,
      justifyContent: 'center',
      borderRadius: 50,
      elevation:4,
    },
  
    buttonText: {
      color: colors.primaryPurple,
      fontFamily: 'Montserrat-Medium',
      textAlign: 'center',
      fontSize: 20,
    },
  
    bottomBarWrap:{
      position: 'absolute',
      flexDirection:'row',
      marginTop: 377,
    },
  
    bottomBarIcons:{
      flex:1,
      justifyContent: 'space-around',
      paddingLeft:35,
      paddingBottom: 10,
      marginTop: 370,
    }
  });

  export default styles;