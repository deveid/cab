import React from 'react';
import styles from './style';
import {Text} from 'react-native';
import {View,Input,InputGroup} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';


export const SearchBox= () => {
  return(
    <View style={styles.searchBox}>
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>PICK UP</Text>
            <InputGroup>
            <Icon name="search" size={15} color="#FF5E3A"/>
                <Input style={styles.inputSearch} placeholder="Enter Pickup Location"/>
            </InputGroup>
        </View>
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>DROP OFF</Text>
            <InputGroup>
            <Icon name="search" size={15} color="#FF5E3A"/>
                <Input style={styles.inputSearch} placeholder="Enter Drop Off Location"/>
            </InputGroup>
        </View>

    </View>
  );
};

export default SearchBox;