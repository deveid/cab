import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
// import styles from './styles';
import Receipt from '../../components/receipt'

export default class ReceiptSlip extends React.Component{


  render(){
  
  return (
    <View>
        <Receipt/>
    </View>
  );
}
}