import { useState } from "react";
import * as React from 'react';
import {
    Button, 
    Modal, 
    StyleSheet, 
    Text, 
    Touchable, 
    TouchableOpacity, 
    View,
    Image,
    ScrollView,
} from "react-native";

import colors from "../../assets/colors/colors";
import { TextInput } from "react-native-gesture-handler";
import DatePicker from "react-native-date-picker";
import AddFriends from "./AddFriends";
import CheckBox from "@react-native-community/checkbox";

const NewList = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const [isSelected, setSelection] = useState(false);

  const [isPinned, setPinned] = useState(false);
  return (
    <View>
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
                onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.CancelButton}
                    source={require('../../assets/images/X_Button.png')}>
                </Image>
                </TouchableOpacity>

              <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>

                <TextInput style={{width: 300}}
                  style={styles.NewListHeader}
                  placeholder="New List"
                  placeholderTextColor={colors.pureBlack}
                  multiline={true}>
                </TextInput>

              <View style={styles.DividerThick}>
              </View>

              
                <Text style={styles.ListDetailsHeader}>
                  Deadline
                </Text>
              
                <TouchableOpacity onPress={() => setOpen(true)}>
                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                  <Text style={styles.ListDetails}>
                  {date ? date.toLocaleDateString() : 'No date selected'}
                  </Text>
                  <View style={styles.AlignIcons}>
                    <Image source={require('../../assets/images/Calendar_Icon.png')}/>
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
                
                <View style={styles.DividerThin}>
                </View>

                <Text style={styles.ListDetailsHeader}>
                  Add Friends
                </Text>
                
                <View style={{color: "white"}}>
                  <AddFriends />
                </View>


                <Text style={styles.ListDetailsHeader}>
                  Add Items
                </Text>

                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                  <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    tintColors={{ true: colors.primaryPurple}}
                    style={styles.Checkboxes}
                  />

                  {/* on press, go to the add friends to this list page */}
                  <TouchableOpacity>
                    <View style={styles.AlignIcons}>
                      <Image source={require('../../assets/images/Add_Item_Icon.png')}/>
                    </View>
                  </TouchableOpacity>
                </View>
              

                <View style={styles.DividerThin}>
                </View>



                <Text style={styles.ListDetailsHeader}>
                  Notes
                </Text>

                {/* fix invasive keyboard for notes*/}
                  <TextInput
                    style={styles.ExtraNotes}
                    placeholder="Any extra notes?"
                    multiline={true}
                  />
                
                <View style={styles.DividerThin}>
                </View>
                
                <View style={styles.PinContainer}>
                  <View style={styles.PinCheckBoxContainer}>
                    <CheckBox
                        value={isPinned}
                        onValueChange={setPinned}
                        tintColors={{ true: colors.primaryPurple, false: colors.primaryPurple}}
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
                  <TouchableOpacity>
                      <Text style={styles.buttonText}>
                          Create List
                      </Text>
                  </TouchableOpacity>
              </View>
          </View>
        </View>
      </Modal>
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
});

export default NewList;

