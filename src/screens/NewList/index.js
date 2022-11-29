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
import DropDownPicker from 'react-native-dropdown-picker';

import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
  LogBox
} from "react-native";

import colors from '../../../assets/colors/colors.js';
import styles from './styles';
import AddItems from '../../components/AddItems';

LogBox.ignoreLogs([
  "VirtualizedLists should never be"
])
LogBox.ignoreLogs([
  "Modal with 'fullScreen'"
])

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

  const [dietPrefs, changeDietPref]  = useState([
  ]);

  
  const oneItem = ( {item} ) => (
    <AddItems />
  )

  const oneDietPref = ( {item} ) => (
    <View>
      <View style={styles.AlignDietaryPreferences}>
        {/* variable for friend's dietary preference */}
        <Text style={styles.DietaryPreference}>
          Veganism
        </Text>
        {/* variable for corresponding friend's name */}
        <Text style={styles.FriendName}>
          Melissa Harper
        </Text>
      </View>
      <View style={styles.DividerThin}/>
    </View>
)
  
  const [itemState, setitemState] = useState(items)
  const [idx, incr] = useState(2);
  const [dietPrefState, setDietPrefState] = useState(dietPrefs)

  const onAddFriend = () => {
    dietPrefs.push({
      id: 1,
      name: "Dietary Pref 1"
    });
    var newDietPrefs = [...dietPrefs]
    setDietPrefState(newDietPrefs)
    changeDietPref(newDietPrefs)
  }


  const noDietPrefMessage = ( {item} ) => {
    return (
    <View>
      <Text style={styles.EmptyList}>
          None of your friends have dietary preferences!
      </Text>
      <View style={styles.DividerThin}/>
      </View>
    )
  }

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

  // temporary functionality for adding friends and dietary prefs
  const [openTemp, setOpenTemp] = useState(false);

  const [valueTemp, setValueTemp] = useState([]);
    const [itemsTemp, setItemsTemp] = useState([
        {
          label: 'Melissa Harper', 
          value: 'Melissa Harper',
          icon: () => <Image source={require('../../../assets/images/Temporary_Profile_Photo.jpg')}
                        style={styles.FriendIcons}/>
        },
    ]);


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

                {/* temporary functionality for adding friends and dietary prefs */}
                <View style={{ color: "white" }}>
                  <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 15,
                        marginTop: -7
                      }}>
                        <DropDownPicker
                          open={openTemp}
                          value={valueTemp}
                          items={itemsTemp}
                          setOpen={setOpenTemp}
                          setValue={setValueTemp}
                          setItems={setItemsTemp}
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
                          onSelectItem={() => onAddFriend()}        
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
                  </View>

                <Text style={styles.ListDetailsHeader}>
                  All Dietary Preferences
                </Text>

                <FlatList 
                  nestedScrollEnabled
                  data = { dietPrefState }
                  renderItem = { oneDietPref }
                  ListEmptyComponent= { noDietPrefMessage }
                />

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

