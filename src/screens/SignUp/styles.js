import { StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";

const styles = StyleSheet.create({
    ImageBackground: {
        width: '100%',
        height: '100%',
    },
    sectionTitle: {
        fontSize: 24,
        color: colors.dark,
        fontFamily: 'Montserrat-Bold',
        alignItems: 'center',
    },
    logoView: {
        alignItems: 'center',
    },
    logo: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        marginBottom: 30
    },
    centerDisplay: {
        marginTop: 25,
        padding: 25,
        paddingBottom: 650,
        borderRadius: 20,
        flexDirection: 'column',
        width: "100%",
        backgroundColor: colors.light,
    },
    input: {
        marginTop: 35,
    },
    textInput: {
        margin: 10,
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey,
    },
    button: {
        height: 45,
        backgroundColor: colors.primaryPurple,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20
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
    Cancel: {
        fontFamily: 'Montserrat-SemiBold',
        color: colors.pureWhite
    },
    CancelContainer: {
        position: 'absolute',
        marginLeft: 10,
        marginTop: 10,
        fontSize: 12,
    }
});
export default styles;