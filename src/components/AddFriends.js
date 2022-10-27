import React, { useState } from 'react';
import { 
  ImageBackground, 
  View,
  Text,
  Image,
  StyleSheet,
  LogBox
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../../assets/colors/colors';

// ignore warning that makes modal transparent
LogBox.ignoreLogs([
  "Modal with 'fullScreen'"
])


const AddFriends = () => {
    const [open, setOpen] = useState(false);
    {/* add functionality for different friends, make default selection no friends selected */}
    const [value, setValue] = useState(['Melissa Harper', 'James Smith', 'Henry Jones', 'Phil Adams']);
    const [items, setItems] = useState([
        {
          label: 'Melissa Harper', 
          value: 'Melissa Harper',
          icon: () => <Image source={require('../../assets/images/Temporary_Profile_Photo.jpg')}
                        style={styles.FriendIcons}/>
        },
        {
          label: 'James Smith', 
          value: 'James Smith',
          icon: () => <Image source={require('../../assets/images/Temporary_Profile_Photo.jpg')}
                        style={styles.FriendIcons}/>
        },
        {
          label: 'Henry Jones', 
          value: 'Henry Jones',
          icon: () => <Image source={require('../../assets/images/Temporary_Profile_Photo.jpg')}
                        style={styles.FriendIcons}/>
        },
        {
          label: 'Phil Adams', 
          value: 'Phil Adams',
          icon: () => <Image source={require('../../assets/images/Temporary_Profile_Photo.jpg')}
                        style={styles.FriendIcons}/>
        }
    ]);

    return (
        <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: -7
        }}>
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            defaultValue={false}
            autoScroll={true}
            maxHeight={180}
            textStyle={styles.TextStyle}
            placeholder="No friends selected"
            placeholderStyle={styles.PlaceHolder}
            searchable={true}
            searchPlaceholder="Search your friends"
            searchContainerStyle={styles.SearchContainer}
            listMode="MODAL"
            scrollViewProps={{
                nestedScrollEnabled: true,
            }}
            modalProps={{
                fullScreen: false,
                animationType: "fade",
                transparent: true,
            }}
            modalTitle="Select friends to add"
            modalContentContainerStyle={styles.ModalContainer}
            /* fix this: make activity indicator component? style empty list message */
            ListEmptyComponent={({
                listMessageContainerStyle, listMessageTextStyle, ActivityIndicatorComponent, loading, message
              }) => (
                <View style={listMessageContainerStyle}>
                  {loading ? (
                    <ActivityIndicatorComponent />
                  ) : (
                    <Text style={listMessageTextStyle}>
                      No friends to select from!
                    </Text>
                  )}
                </View>
              )}

            theme="LIGHT"
            multiple={true}
            mode="BADGE"
            badgeDotColors={colors.primaryPurple}
        />
        </View>

  );
}


const styles = StyleSheet.create({
    FriendIcons: {
      height: 35,
      width: 35,
      borderRadius: 30,
      marginVertical: 5
    },
    ModalContainer: {
      borderRadius: 50,
      padding: 30,
      backgroundColor: colors.pureWhite,
      marginTop: 65
    },
    PlaceHolder: {
      color: "grey",
      marginTop: -5,
      marginBottom: -5
    },
    SearchContainer: {
      borderBottomColor: colors.pureWhite,
      marginBottom: -5
    },
    TextStyle: {
      fontSize: 15,
      fontFamily: 'Montserrat-Regular',
    },
});


export default AddFriends;
