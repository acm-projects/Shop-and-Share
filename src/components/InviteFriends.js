import * as React from 'react';
import SearchBar from "react-native-dynamic-search-bar";
import Clipboard from '@react-native-clipboard/clipboard';
import { useState } from 'react';
import colors from '../../assets/colors/colors';

import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  TouchableOpacity,
  Image
}  from "react-native";

const InviteFriends = () => {
    const [copiedText, setCopiedText] = useState('');

    // set this string to the user's profile link
    const copyToClipboard = () => {
        Clipboard.setString('shop&sha.re/username');
    };
    
    const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
    };
    
    return (
      <>
        <SafeAreaView style={{flex: 1}}>
      <View>
        <TouchableOpacity onPress={copyToClipboard} style={styles.ButtonContainer}>
            <View style={styles.AlignWithClipboard}>
                <View style={styles.AlignItems}>
                    <Image source={require('../../assets/images/Temporary_Profile_Photo.jpg')}
                        style={styles.UserProfilePhoto}/>
                <View>
                    <Text style={styles.ButtonHeaderText}>
                        Invite your friends to Shop&Share!
                    </Text>
                    <Text style={styles.ButtonBodyText}>
                        shop&sha.re/username
                    </Text>
                </View>
            </View>

            <Image source={require('../../assets/images/Copy_Clipboard.png')}
                    style={styles.ClipboardIcon}/>

            </View>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
      </>
    )
  }

  const styles = StyleSheet.create({
    ButtonContainer: {
        backgroundColor: colors.pureWhite,
        height: 70,
        marginHorizontal: 10,
        borderRadius: 14,
        width: 353
    },
    ButtonHeaderText: {
        fontFamily: "Montserrat-Bold",
        fontSize: 12,
        color: colors.pureBlack,
        marginTop: 17,
        marginLeft: 9,
        marginRight: 15
    },
    ButtonBodyText: {
        fontFamily: "Montserrat-Regular",
        color: "grey",
        fontSize: 11,
        marginLeft: 9
    },
    UserProfilePhoto: {
        width: 45,
        height: 45,
        borderRadius: 50,
        marginLeft: 15,
        marginTop: 10
    },
    AlignItems: {
        justifyContent: "flex-start",
        flexDirection: "row"
    },
    AlignWithClipboard: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    ClipboardIcon: {
        marginTop: 16,
        marginRight: 12
    }
  });

  export default InviteFriends;