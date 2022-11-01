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
    FriendUsername: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
        textAlign: 'right',
        position: 'absolute',
            right: 30,
            top: 82,
        color: colors.pureWhite
    },
    FriendDisplayName: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        position: 'absolute',
            right: 30,
            top: 60,
        alignSelf: "flex-end",
        color: colors.pureWhite
    },
    ExclamationPoint: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        textAlign: 'right',
        position: 'absolute',
            right: 30,
            top: 82,
        color: colors.pureWhite
    },
    FriendProfilePhoto: {
        borderRadius: 50,
        borderWidth: 5,
        borderColor: colors.pureWhite,
        width: 100,
        height: 100,
        resizeMode:'contain',
        position: 'absolute',
            left: 30,
            top: 32,
        overflow: 'hidden',
    },
    ProfilePhotoShadow: {
        backgroundColor: colors.pureBlack,
        borderRadius: 50,
        width: 100,
        height: 100,
        opacity: 0.15,
        position: 'absolute',
            left: 33,
            top: 36,
    },
    AddFriendContainer: {
        height: 29,
        width: 115,
        backgroundColor: colors.pureWhite,
        borderRadius: 25,
        elevation: 4,
        marginTop: 201,
        marginLeft: 140,
    },
    AddFriendButton: {
        color: colors.secondaryPurple,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        fontSize: 12,
        paddingTop: 7,
    },
    ListsNumber: {
        justifyContent: 'center',
        fontFamily: 'Montserrat-Bold',
        color: colors.pureWhite,
        fontSize: 24,
        position: 'absolute',
            left: 150,
            top: 137,
    },
    GroupsNumber: {
        justifyContent: 'center',
        fontFamily: 'Montserrat-Bold',
        color: colors.pureWhite,
        fontSize: 24,
        position: 'absolute',
            left: 210,
            top: 137,
    },
    ListsText: {
        justifyContent: 'center',
        fontFamily: 'Montserrat-Regular',
        color: colors.pureWhite,
        fontSize: 16,
        position: 'absolute',
            left: 150,
            top: 166,
    },
    GroupsText: {
        justifyContent: 'center',
        fontFamily: 'Montserrat-Regular',
        color: colors.pureWhite,
        fontSize: 16,
        position: 'absolute',
            left: 210,
            top: 166,
    },
    ProfileDetailsContainer: {
        backgroundColor: colors.pureWhite,
        width: '100%',
        height: 800,
        position: 'absolute',
            top: 238,
        borderRadius: 30,
    },
    ProfileHeader: {
        fontFamily: 'Montserrat-Bold',
        color: colors.pureBlack,
        fontSize: 24,
        position: 'absolute',
            left: 13,
            top: 270,
    },
    positionButtons: {
        position: 'absolute',
            top: 330,
    },
    ButtonFormat: {
        fontFamily: 'Montserrat-Regular',
        color: colors.pureBlack,
        fontSize: 16,
        padding: 13,
    },
    SignOutButton: {
        fontFamily: 'Montserrat-Medium',
        color: 'tomato',
        fontSize: 16,
        padding: 13,
    },
    DividerThick: {
        backgroundColor: colors.lightDivider,
        width: 800,
        height: 9,
    },
    DividerThin: {
        backgroundColor: colors.lightDivider,
        width: 800,
        height: 2,
    },
    ButtonArrows: {
        position: 'absolute',
            left: 350,
        marginTop: 13,
    },
    CancelContainer: {
        position: 'absolute',
        marginLeft: 360,
        marginTop: 15,
    }
  });

  export default styles;