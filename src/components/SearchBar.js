
import * as React from 'react';
import SearchBar from "react-native-dynamic-search-bar";

import { 
  StyleSheet, 
  Text, 
  View, 
}  from "react-native";

const SearchableBar = () => {
    return (
      <>
      {/* look at react-native-dynamic-search-bar package 
      to add the list you want to search from */}
        <SearchBar
        fontSize={13}
        height={34}
        backgroundColor="white"
        placeholder='Search'
        style={{borderRadius: 25, marginBottom: 15}}
        fontFamily="Montserrat-Regular"
        textInputStyle={{marginBottom: -5}}
        searchIconImageStyle={{height: 15, width: 15, marginLeft: 5}}
        clearIconImageStyle={{height: 13, width: 13, marginRight: 5}}
        />
      </>
    )
  }

  export default SearchableBar;