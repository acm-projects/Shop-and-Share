import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import NewListScreen from '../NewList';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';

import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  ImageBackground,
  Image,
  Touchable,
  ScrollView
}  from "react-native";

import colors from '../../../assets/colors/colors.js';
import styles from './styles.js';
import SearchableBar from '../../components/SearchBar.js';
import { create } from 'react-test-renderer';

const db = firestore().collection('Users');


export default ViewList = () => {
    const [list, setList] = React.useState([]);

    const nav = useNavigation();
    const user = firebase.auth().currentUser?.email;

    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const createList = () => {
        db.doc(user).collection('Lists').get()
            .then(querySnapshot => {
                querySnapshot.forEach(document => {
                    if (document.get('deadline')) {
                        let info = {
                            'title': document.id,
                            'date': document.get('deadline').toDate().toLocaleDateString(undefined, options),
                            'isPinned': document.get('isPinned')
                        }

                        if (document.get('isPinned')) {
                            setList(arr => [info, ...arr]);
                        } else {
                            setList(arr => [...arr, info]);
                        }
                    }
                })
            })
    }

    React.useLayoutEffect(() => {
        return createList();
    }, [])

    return (
        <ImageBackground source={require('../../../assets/images/Background.jpg')}
            style={styles.ImageBackground}>
            <Text style={styles.sectionTitle}>
                My Lists.
            </Text>
            <View style={styles.containter}>
                <View style={styles.centerDisplay}>
                     <View style={{marginBottom: -10}}>
                      <SearchableBar/>
                      </View>
                      
                    <ScrollView style = {{height: 500, marginBottom: 20}}>
                    {
                        list.map((item) =>
                            <TouchableOpacity key={item.title}>
                                <View style={styles.box2}>
                                    <Image
                                        source={require('../../../assets/images/Pin.png')}
                                        style={item.isPinned ? styles.pin : styles.noPin}
                                    />
                                    <Text style={styles.sectionList}>
                                        {item.title}
                                    </Text>
                                    <Text style={styles.sectionList2}>
                                        {item.date}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                   </ScrollView>
                </View>
                <TouchableOpacity onPress={() => nav.push('New List')}>
                    <View style={styles.addListButton}>
                        <Text style={styles.addList}>
                            Add a List
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground >
    )
}