import * as React from 'react';
import { useState } from "react";
import DatePicker from "react-native-date-picker";
import AddFriends from '../../components/AddFriends';
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

import colors from '../../../assets/colors/colors.js';
import styles from './styles';
import AddItems from '../../components/AddItems';

const db = firestore().collection('Users');

const NewListScreen = () => {
  const nav = useNavigation();

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

    nav.pop();

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
      <ImageBackground source={require('../../../assets/images/Background.jpg')}
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
                  source={require('../../../assets/images/X_Button.png')}>
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
                      <Image source={require('../../../assets/images/Calendar_Icon.png')} />
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
                  <Image source={require('../../../assets/images/Add_Item_Icon.png')}/>
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
                {/*onpress add list to the home page
                with all the details */}
                <TouchableOpacity onPress={() => createList()}>
                  <Text style={styles.buttonText}>
                    Create List
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

export default NewListScreen;

