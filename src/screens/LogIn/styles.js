import {StyleSheet}  from "react-native";
import colors from "../../../assets/colors/colors";

const styles = StyleSheet.create({ 
    sectionTitle: {
        fontSize: 24,
        color: colors.dark,
        fontFamily: 'Montserrat-Bold', 
        alignItems: 'center',
    },
    ImageBackground: {
        width: '100%',
        height: '100%',
    },
    logoView: {
        alignItems: 'center',
    },
    logo: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 75,
        resizeMode: 'contain'
    },
    centerDisplay: {
        marginTop: 25,
        padding: 25,
        paddingBottom: 650,
        borderRadius: 20,
        flexDirection: 'column',
        width:"100%",
        backgroundColor: colors.light,
    },
    input: {
        marginTop: 35,
    },
    textInput: {
        margin: 10,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey,
    },
    button: {
        height: 42,
        backgroundColor: colors.primaryPurple,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 40
      },
    buttonText: {
        color: colors.pureWhite,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        fontSize: 16,
      },
    forgotPass: {
        marginLeft: 15,
        fontFamily: 'Montserrat-Regular',
        color: colors.dpurp,
    },
    signUp: {
        marginTop: 5,
        fontFamily: 'Montserrat-Bold',
        fontVariant: ['underline'],
        
    },

});
export default styles;