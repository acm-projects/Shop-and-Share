import colors from "../../../assets/colors/colors";

import { 
    StyleSheet,   
  }  from "react-native";

const styles = StyleSheet.create({
    Center: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    ImageBackground: {
      width: "100%",
      height: "100%"
    },
    ModalView: {
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingTop: 10,
        marginTop: 65,
        paddingBottom: 40
    },
    ImageBackground: {
        height: "100%",
        width: "100%",
    },
    NewListContainer: {
      backgroundColor: colors.pureWhite,
      width: '100%',
      borderRadius: 50,
    },
    NewListHeader: {
      fontFamily: 'Montserrat-SemiBold',
      color: colors.pureBlack,
      fontSize: 30,
    },
    DividerThick: {
      backgroundColor: colors.darkDivider,
      width: 320,
      height: 3,
      marginBottom: 4,
      borderRadius: 3,
    },
    DividerThin: {
      backgroundColor: colors.darkDivider,
      width: 320,
      height: 2,
      marginBottom: 16,
      marginTop: 8,
      borderRadius: 3,
    },
    scrollView: {
      marginHorizontal: 34,
      marginTop: 25,
      marginBottom: 60,
    },
    ListDetailsHeader: {
      fontSize: 17,
      color: colors.pureBlack,
      fontFamily: 'Montserrat-Medium',
      marginBottom: 12,
      marginTop: 15,
    },
    ListDetails: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 14,
    },
    AlignIcons: {
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      justifyContent:'flex-end', 
      overflow: 'visible',
      marginRight: 5
    },
    Checkboxes: {
      marginHorizontal: -5,
      marginTop: -5,
      marginBottom: -5
    },
    ExtraNotes: {
      fontFamily: 'Montserrat-Regular',
      marginHorizontal: -3,
      marginTop: -14,
      marginBottom: -16,
      fontSize: 14,
    },
    PinContainer: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: 'flex-start',
      marginTop: 20
    },
    PinCheckBoxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    PinListText: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 15,
      color: colors.primaryPurple,
      marginLeft: 6,
    },
    buttonContainer: {
      position: "absolute",
      top: 630,
      height: 45,
      backgroundColor: colors.primaryPurple,
      justifyContent: 'center',
      borderRadius: 50,
      elevation:4,
      width: 289,
      marginHorizontal: 50,
    },
    buttonText: {
      color: colors.pureWhite,
      fontFamily: 'Montserrat-Medium',
      textAlign: 'center',
      fontSize: 20,
    },
    CancelButton: {
        alignSelf: "flex-end",
        marginRight: 40,
        top: 20,
        fontFamily: "Montserrat-Bold",
        color: colors.primaryPurple,
        fontSize: 13,
    },
    AlignDietaryPreferences: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    ItemIcon: {
      position: "absolute",
      marginTop: 18,
      marginLeft: 300
    },
    DietaryPreference: {
      color: colors.primaryPurple,
      fontSize: 14,
      fontFamily: "Montserrat-Medium",
      marginBottom: -3,
    },
    FriendName: {
      color: "grey",
      fontSize: 14,
      fontFamily: "Montserrat-Regular",
      marginRight: 5,
      marginBottom: -3,
    }
});

export default styles;