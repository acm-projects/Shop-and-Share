import React, { useState } from 'react';
import { TextInput } from "react-native-gesture-handler";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-date-picker';

import { 
  ImageBackground, 
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import colors from '../../assets/colors/colors';

const AddItems = () => {
  const [isSelected, setSelection] = useState(false);

  const img = require("../../assets/images/Add_Item_Icon.png")
  const [imageAsset, setImageAsset] = useState(img)

  const handleImageChange = () => {
    const newImg = require("../../assets/images/Item_Dropdown_Icon.png")
    setImageAsset(newImg)
  }

  const [expirationDate, setExpirationDate] = useState(new Date())
  const [expirationOpen, setExpirationOpen] = useState(false)
  return (
    <View>
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
          <Collapse onToggle={handleImageChange}>
            <CollapseHeader>
                  <View style={styles.AlignIcons}>
                  <Image 
                    source={imageAsset}/>
                  </View>
            </CollapseHeader>   
            <CollapseBody styles={styles.AddItemContainer}>
              <View style={styles.DetailsDivider}>
              </View>

              <View style={styles.AlignDetailIcons}>
                <Image source={require('../../assets/images/Store_Icon.png')}
                      style={styles.DetailIcons}/>
                <Text
                style={styles.DetailTextStyle}>
                  Store 
                </Text>

                <TextInput style={styles.DetailTextInput}
                placeholder='Store'> 
                </TextInput>
              </View>

              <View style={styles.DetailsDivider}>
              </View>

              <View style={styles.AlignDetailIcons}>
                <Image source={require('../../assets/images/Brand_Icon.png')}
                      style={styles.DetailIcons}/>
                <Text
                style={styles.DetailTextStyle}>
                  Brand 
                </Text>

                <TextInput style={styles.DetailTextInput}
                placeholder='Brand'> 
                </TextInput>
              </View>

              <View style={styles.DetailsDivider}>
              </View>

              <View style={styles.AlignDetailIcons}>
                <Image source={require('../../assets/images/Price_Icon.png')}
                      style={styles.DetailIcons}/>
                <Text
                style={styles.DetailTextStyle}>
                  Price 
                </Text>

                <TextInput style={styles.DetailTextInput}
                placeholder='Price'> 
                </TextInput>
              </View>

              <View style={styles.DetailsDivider}>
              </View>

              <View style={styles.AlignDetailIcons}>
                <Image source={require('../../assets/images/Quantity_Icon.png')}
                      style={styles.DetailIcons}/>
                <Text
                style={styles.DetailTextStyle}>
                  Quantity
                </Text>
                <TextInput style={styles.DetailTextInput}
                placeholder='Quantity'> 
                </TextInput>
              </View>

              <View style={styles.DetailsDivider}>
              </View>

              <View style={styles.AlignDetailIcons}>

                <TouchableOpacity onPress={() => setExpirationOpen(true)}>
                  <Image source={require('../../assets/images/Expiration_Icon.png')}
                        style={styles.DetailIcons}/>
                  <Text
                  style={styles.DetailTextStyle}>
                    Expires By
                  </Text>
                  <Text style={styles.ExpirationDateText}>
                  {expirationDate ? expirationDate.toLocaleDateString() : 'No date selected'}
                  </Text>
                </TouchableOpacity>

                <DatePicker
                  modal
                  mode="date"
                  open={expirationOpen}
                  date={expirationDate}
                  onConfirm={(expirationDate) => {
                    setExpirationOpen(false)
                    setExpirationDate(expirationDate)
                  }}
                  onCancel={() => {
                    setExpirationOpen(false)
                  }}
                />

              </View>
            </CollapseBody>
        </Collapse>
        </View>

        <View style={styles.DividerThin}>
        </View>
    </View>
);
}


const styles = StyleSheet.create({
  ItemName: {
    fontFamily: 'Montserrat-Regular',
    marginTop: -14,
    marginBottom: -14,
    fontSize: 14,
    width: 270,
    marginLeft: 23,
    position: "absolute"
  },
  AddItemContainer: {
    width: 100,
    position: 'absolute',
  },
  DetailTextStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: colors.pureBlack,
    width: 300,
    paddingRight: 20,
    position: "absolute",
    left: 10
  },
  AlignDetailIcons: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  DetailIcons: {
    marginLeft: -20,
    marginRight: 10,
    marginBottom: 5,
    top: 2
  },
  DetailsDivider: {
    backgroundColor: colors.darkDivider,
    width: 320,
    height: 2,
    marginVertical: 8,
    borderRadius: 3,
    marginLeft: -20,
    right: 5
  },
  DetailText: {
    position: "absolute",
    marginLeft: -300
  },
  DividerThin: {
    backgroundColor: colors.darkDivider,
    width: 320,
    height: 2,
    marginBottom: 16,
    marginTop: 8,
    borderRadius: 3,
  },
  Checkboxes: {
    marginHorizontal: -5,
    marginTop: -5,
    marginBottom: -5
  },
  AlignIcons: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent:'flex-end', 
    overflow: 'visible',
    marginRight: 5
  },
  DetailTextInput: {
    fontFamily: "Montserrat-Regular",
    color: "grey",
    left: 92,
    top: -15,
    marginBottom: -30,
    width: 200,
    position: "absolute"
  },
  ExpirationDateText: {
    fontFamily: "Montserrat-Regular",
    color: "grey",
    left: 97,
    width: 200,
    position: "absolute"
  }
});


export default AddItems;
