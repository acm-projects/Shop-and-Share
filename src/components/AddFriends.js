import React, { useState } from 'react';
import { 
  ImageBackground, 
  View,
  Text,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const AddFriends = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(['Melissa Harper', 'James Smith', 'Henry Jones', 'Phil Adams']);
    const [items, setItems] = useState([
        {label: 'Melissa Harper', value: 'Melissa Harper'},
        {label: 'James Smith', value: 'James Smith'},
        {label: 'Henry Jones', value: 'Henry Jones'},
        {label: 'Phil Adams', value: 'Phil Adams'}
    ]);

    return (
        <View style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        }}>
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            autoScroll={true}
            maxHeight={180}
            
            textStyle={{
                fontSize: 15,
                fontFamily: 'Montserrat-Regular',
            }}
            placeholder="No friends selected"
            placeholderStyle={{
                color: "grey",
                marginTop: -5,
                marginBottom: -5
            }}
            searchable={true}
            searchPlaceholder="Search your friends"
            searchContainerStyle={{
                borderBottomColor: "white",
                marginBottom: -5
            }}
            listMode="MODAL"
            scrollViewProps={{
                nestedScrollEnabled: true,
            }}
            modalProps={{
                fullScreen: false,
                animationType: "fade",
            }}
            modalTitle="Select friends to add"
            modalContentContainerStyle={{
                borderRadius: 30,
                height: 200,
                marginHorizontal: 30,
                marginTop: 100,
                marginBottom: 100,
                backgroundColor: "white",
                borderWidth: 10,
                borderColor: "transparent"
            }}
            dropDownContainerStyle={{
                backgroundColor: "white"
            }}
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
            badgeDotColors={["#8271EF"]}
        />
        </View>
  );
}

export default AddFriends;