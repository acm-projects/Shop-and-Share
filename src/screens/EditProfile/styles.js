import * as React from 'react';

import { 
  StyleSheet,   
}  from "react-native";

import colors from '../../../assets/colors/colors.js';

const styles = StyleSheet.create({
    Center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    ImageBackground: {
        width: "100%",
        height: "100%"
    },
    ModalView: {
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingTop: 10,
        paddingBottom: 62
    },
    Options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
    },
    CancelButton: {
        alignSelf: "flex-start",
        fontFamily: "Montserrat-Medium",
        color: "black",
        marginLeft: 12,
        fontSize: 13,
    },
    SaveButton: {
        alignSelf: "flex-end",
        marginRight: 12,
        bottom: 20,
        fontFamily: "Montserrat-Bold",
        color: colors.primaryPurple,
        fontSize: 13,
    },
    DividerThick: {
        backgroundColor: colors.lightDivider,
        width: 340,
        height: 9,
    },
    DividerThin: {
        backgroundColor: colors.lightDivider,
        width: 340,
        height: 2,
    },
    AlignHeaderAndInput: {
        flexDirection: "row",
    },
    Header: {
        fontFamily: "Montserrat-Bold",
        color: colors.pureBlack,
        marginVertical: 15,
        marginLeft: 15,
        fontSize: 12,
    },
    ResetPass: {
        fontFamily: "Montserrat-SemiBold",
        color: "red",
        marginVertical: 19,
        marginLeft: 15,
        fontSize: 12,
    },
    ButtonContainer: {
        marginLeft: 100,
    },
    ChangePhotoButton: {
        fontFamily: "Montserrat-SemiBold",
        color: colors.primaryPurple,
        fontSize: 13,
        alignSelf: "center",
        marginBottom: 15,
    },
    Input: {
        position: "absolute",
        left: 130,
        width: 180,
        fontFamily: "Montserrat-Medium",
        color: colors.pureBlack,
        fontSize: 12,
    },
    ProfilePhotoContainer: {
        borderRadius: 50,
        width: 100,
        height: 100,
        marginBottom: 10,
        alignSelf: "center",
    }
});

export default styles;