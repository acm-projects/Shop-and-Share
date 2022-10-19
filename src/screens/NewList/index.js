import * as React from 'react';
import { useState } from "react";
import DatePicker from "react-native-date-picker";
import AddFriends from '../../components/AddFriends';
import CheckBox from "@react-native-community/checkbox";
import { TextInput } from "react-native-gesture-handler";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";


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

import colors from '../../../assets/colors/colors.js';
import styles from './styles';


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
                    source={require('../../../assets/images/X_Button.png')}>
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
                    <Image source={require('../../../assets/images/Calendar_Icon.png')}/>
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
                          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                tintColors={{ true: colors.primaryPurple}}
                                style={styles.Checkboxes}
                            />
                            <TextInput
                            style={styles.ItemName}
                            placeholder="Item Name"
                            />
                          </View>
                  <Collapse>
                        <CollapseHeader>
                              <View style={styles.AlignIcons}>
                              <Image source={require('../../../assets/images/Add_Item_Icon.png')}/>
                              </View>
                        </CollapseHeader>
                        <CollapseBody styles={styles.AddItemContainer}>
                          <TextInput
                          style={styles.ExtraNotes}
                          placeholder="Brand"
                          multiline={true}
                          />
                        </CollapseBody>
                    </Collapse>
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

export default NewList;

