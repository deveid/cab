import React from 'react';
import styles from './style';
import {Text} from 'react-native';
import {View,Input,InputGroup} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';


export const SearchBox = ({getInputData, toggleSearchResultModal}) => {

    function handleInput(key,val){
        getInputData({
            key,
            value:val
        });
    }

  return(
    <View style={styles.searchBox}>
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>PICK UP</Text>
            <InputGroup>
            <Icon name="search" size={15} color="#FF5E3A"/>
                <Input onFocus={()=>toggleSearchResultModal("pickUp")}
                style={styles.inputSearch} placeholder="Enter Pickup Location" 
                onChangeText={handleInput.bind(this, "pickUp")}/>
            </InputGroup>
        </View>
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>DROP OFF</Text>
            <InputGroup>
            <Icon name="search" size={15} color="#FF5E3A"/>
                <Input onFocus={()=>toggleSearchResultModal("dropOff")}
                style={styles.inputSearch} placeholder="Enter Drop Off Location"
                    onChangeText={handleInput.bind(this, "dropOff")}
                />
            </InputGroup>
        </View>

    </View>

  );
};

export default SearchBox;