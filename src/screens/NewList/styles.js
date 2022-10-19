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
      marginBottom: 19,
      borderRadius: 3,
    },
    DividerThin: {
      backgroundColor: colors.darkDivider,
      width: 320,
      height: 2,
      marginBottom: 31,
      marginTop: 5,
      borderRadius: 3,
    },
    scrollView: {
      marginHorizontal: 34,
      marginTop: 25
    },
    ListDetailsHeader: {
      fontSize: 17,
      color: colors.pureBlack,
      fontFamily: 'Montserrat-Medium',
      marginBottom: 12,
    },
    ListDetails: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 15,
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
      marginBottom: -14,
      fontSize: 15,
    },
    PinContainer: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: 'flex-start',
    },
    PinCheckBoxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    PinListText: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 15,
      color: colors.primaryPurple,
      marginLeft: 6,
    },
    buttonContainer: {
      height: 45,
      backgroundColor: colors.primaryPurple,
      justifyContent: 'center',
      borderRadius: 50,
      elevation:4,
      width: 289,
      marginHorizontal: 50,
      marginBottom: 20
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
    ItemName: {
      fontFamily: 'Montserrat-Regular',
      marginTop: -14,
      marginBottom: -14,
      fontSize: 15,
      width: 270,
      marginLeft: 5,
    },
    AddItemContainer: {
      width: 100,
      position: 'absolute',
    }
});

export default styles;