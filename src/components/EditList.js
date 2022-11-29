import * as React from 'react';
import { useState } from "react";
import DatePicker from "react-native-date-picker";
import CheckBox from "@react-native-community/checkbox";
import { TextInput } from "react-native-gesture-handler";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { useNavigation } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';

import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
  FlatList
} from "react-native";

import colors from '../../assets/colors/colors';
import AddItems from './AddItems';
import AddFriends from './AddFriends.js';

const db = firestore().collection('Users');

const EditListComponent = () => {
//   const nav = useNavigation();

  const [modalVisible, setModalVisible] = useState(true);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [isSelected, setSelection] = useState(false);
  const [isPinned, setPinned] = useState(false);
  const [listName, setListName] = React.useState('');
  const [notes, setNotes] = React.useState('');

  const createList = () => {
    const name = listName == '' ? 'New List' : listName;

    const user = db.doc(firebase.auth().currentUser?.email);
    user.collection('Lists').doc(name).set({
      'deadline': date,
      'notes': notes,
      'isPinned': isPinned,
    });

    // nav.pop();

  }

  const [items, changeEl]  = useState([
    { id : 1, name : "Item1"},
  ]);
  
  const oneItem = ( {item} ) => (
    <AddItems />
  )
  
  const [itemState, setitemState] = useState(items)
  const [idx, incr] = useState(2);

  const addItem = () => {
    var newItem = [...items, {id: idx, name: 'Item' + (idx+1)}]
    items.push({
      id: idx,
      text: "Item" + (idx+1)
    });
    incr(idx+1);
    setitemState(newItem)
    changeEl(newItem)
  }

  return (
    <View>
      <ImageBackground source={require('../../assets/images/Background.jpg')}
        style={styles.ImageBackground}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.Center}>
            <View style={styles.ModalView}>
              <View style={styles.NewListContainer}>
              </View>
              <TouchableOpacity
                onPress={() => nav.pop()}>
                <Image style={styles.CancelButton}
                  source={require('../../assets/images/X_Button.png')}>
                </Image>
              </TouchableOpacity>

              <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>

                <TextInput
                  // style={{ width: 300 }}
                  style={styles.NewListHeader}
                  placeholder="New List"
                  placeholderTextColor={colors.grey}
                  multiline={true}
                  value={listName}
                  onChangeText={setListName}
                />

                <View style={styles.DividerThick} />

                <Text style={styles.ListDetailsHeader}>
                  Deadline
                </Text>

                <TouchableOpacity onPress={() => setOpen(true)}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.ListDetails}>
                      {date ? date.toLocaleDateString() : 'No date selected'}
                    </Text>
                    <View style={styles.AlignIcons}>
                      <Image source={require('../../assets/images/Calendar_Icon.png')} />
                    </View>
                  </View>
                </TouchableOpacity>

                <DatePicker
                  modal
                  mode="date"
                  open={open}
                  date={date}
                  onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                  }}
                  onCancel={() => {
                    setOpen(false)
                  }}
                />

                <View style={styles.DividerThin} />

                <Text style={styles.ListDetailsHeader}>
                  Add Friends
                </Text>

                <View style={{ color: "white" }}>
                  <AddFriends />
                </View>

                <Text style={styles.ListDetailsHeader}>
                  All Dietary Preferences
                </Text>
                {/* add this dietary preference section based on the friends selected
                  in the add friends section. */}
                <View>
                  <View style={styles.AlignDietaryPreferences}>
                    {/* variable for friend's dietary preference */}
                    <Text style={styles.DietaryPreference}>
                      Veganism
                    </Text>
                    {/* variable for corresponding friend's name */}
                    <Text style={styles.FriendName}>
                      James Smith
                    </Text>
                  </View>
                  <View style={styles.DividerThin} />
                </View>

                <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
                <Text style={styles.ListDetailsHeader}>
                  Add Items
                </Text>
                <TouchableOpacity style={styles.ItemIcon} onPress={addItem}>
                  <Image source={require('../../assets/images/Add_Item_Icon.png')}/>
                </TouchableOpacity>
                </View>

                {/* add item component; onPress of add item icon (plus sign button), 
                call the component again*/}
                <FlatList 
                  nestedScrollEnabled
                  data = { itemState }
                  renderItem = { oneItem }
                />

                <Text style={styles.ListDetailsHeader}>
                  Notes
                </Text>

                <TextInput
                  style={styles.ExtraNotes}
                  placeholder="Any extra notes?"
                  multiline={true}
                  value={notes}
                  onChangeText={setNotes}
                />

                <View style={styles.DividerThin} />

                <View style={styles.PinContainer}>
                  <View style={styles.PinCheckBoxContainer}>
                    {/* when checkbox clicked, pin list */}
                    <CheckBox
                      value={isPinned}
                      onValueChange={setPinned}
                      tintColors={{ true: colors.primaryPurple, false: colors.primaryPurple }}
                      style={styles.Checkboxes}
                    />
                    <Text style={styles.PinListText}>
                      Pin this list?
                    </Text>
                  </View>
                </View>
              </ScrollView>

              <View style={styles.buttonContainer}>
                {/*onpress save any changes made to the list */}
                  <TouchableOpacity>
                      <Text style={styles.buttonText}>
                          Save Changes
                      </Text>
                  </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};

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

export default EditListComponent;

