import React from 'react';
import styles from './style';
import {Text,FlatList} from 'react-native';
import {View,Input,InputGroup, List, ListItem, Left} from 'native-base';
import { SearchBar, Avatar } from 'react-native-elements';
import Icon from "react-native-vector-icons/MaterialIcons";

export const SearchResults= () => {


  return(
      <View style={styles.searchResult}>

          <List style={styles.inputWrapper}>
            <ListItem button avatar>
            <Left style={styles.leftContainer}>
                <Icon style={styles.leftIcon} name="location-on"/>
            </Left>
              <Text style={styles.leftText}>list1</Text>
            </ListItem>

    
            <ListItem>
              <Text>list2</Text>
            </ListItem>
          </List>
      </View>
        );
    
};

export default SearchResults;