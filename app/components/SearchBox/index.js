import React from 'react';
import styles from './style';
import {Text} from 'react-native';
import {View,Input,InputGroup} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
import {
        getCurrentLocation,
        getInputData,
        toggleSearchResultModal,
} from '../../actions/currentLocation';
import {GooglePlacesInput} from './places';

class SearchBox extends React.Component {

    constructor(props){
        super(props);
        this.state={
            pickUp:'',
            dropOff:'',
            }
    }
    handleInputPickUp=(val)=>{
        this.setState({pickUp:val})
        }

    handleInputDropOff = (val) =>{
        this.setState({dropOff:val})
        }
    
    render(){
  return(
  <View style={styles.searchBox}>
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>PICK UP</Text>
            {/* <InputGroup>
            <Icon name="search" size={15} color="#FF5E3A"/> */}
                <GooglePlacesInput api={'AIzaSyCWg-zPpPLbCaE1-Y6SUVeHccm6zWIyPXI'} />
            {/* </InputGroup> */}
        </View>
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>DROP OFF</Text>
            {/* <Icon name="search" size={15} color="#FF5E3A"/> */}
        <GooglePlacesInput api={'AIzaSyCoNwB6smz5XvoavCCOLWnXgqpxDDORGaU'}/>
        </View>

    </View>

  );
}
};

export default SearchBox;