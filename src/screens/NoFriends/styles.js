import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  StyleSheet,
} from "react-native";

import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  ImageBackground: {
    flexDirection: 'column',
    height: "100%",
    width: "100%",
  },
  Image: {
    height: "20%",
    width: "20%",
    alignself: 'center'
  },
  input: {
    backgroundColor: "white",
    color: colors.lightGrey,
    width: "95%",
    borderWidth: 0,
    borderRadius: 32,
    padding: 4,
    paddingTop: 5,
    textAlign: 'center',
    marginHorizontal: 10,
    fontFamily: 'Montserrat-Medium',
    padding: 5,
    marginBottom: 10,
  },

  NoLists: {
    textAlign: 'center',
    marginTop: 100,
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
    elevation: 4,
  },

  buttonContainer2: {
    topPadding: 10,
    height: 75,
    marginHorizontal: 10,
    backgroundColor: colors.pureWhite,
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 4,
    padding: 3,
  },

  Logo: {
    height: 100,
    marginHorizontal: 160,
    justifyContent: 'center',
  },


  ProfilePicture: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    //aspectRatio: 1.5,
    //resizeMode: 'cover',
    //height: 100,
    //width: "25%",
    //aspectRatio: '.5',
    //resizeMode: 'contain',
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //justifyContent: 'center',
    //paddingLeft: 2000,
    //aspectRatio: .05, 

  },

  InviteFriends: {
    color: colors.pureBlack,
    fontFamily: 'Montserrat-ExtraBold',
    textAlign: 'center',
    fontSize: 14,
    paddingLeft: 75,
    paddingTop: 8,
    textAlign: 'left',
    //flex: 1,
    //flexDirection: 'row',
    justifyContent: 'center',

  },

  Link: {
    color: colors.grey,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    fontSize: 10,
    paddingLeft: 75,
    textAlign: 'left',
    paddingBottom: 30,
    //flex: 1,
    //flexDirection: 'row',
    justifyContent: 'center',

  },

  buttonText: {
    color: colors.primaryPurple,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    fontSize: 20,
  },

  bottomBarWrap: {
    position: 'absolute',
    flexDirection: 'row',
    marginTop: 377,
  },

  bottomBarIcons: {
    flex: 1,
    justifyContent: 'space-around',
    paddingLeft: 35,
    paddingBottom: 10,
    marginTop: 370,
  },

  inviteContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
  }
});
