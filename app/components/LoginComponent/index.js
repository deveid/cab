import React from 'react';
import styles from './style';
import {View,Button} from 'native-base';
import MapView from 'react-native-maps';
import SearchBox from '../SearchBox';
import logo from '../../screens/Splash/background.png';
import * as loginActions from 'app/actions/loginActions';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'native-base';

import {
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    Image,
    Alert
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const LoginContainer= ({email,password}) => {
    const id = useSelector(state => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
    
        state={
            email:'',
            password:''
        }
        

  return(
    <View style={styles.container}>
        <Image style={styles.image} source={logo}/>
        <Card style={styles.card}>
        <View style={styles.inputContainer}>
        <Icon name="envelope" size={15} color="#3679D1" style={styles.icon}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              />
        </View>
        <View style={styles.inputContainer}>
        <Icon name="lock" size={19} color="#3679D1" style={styles.icon}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
            />
        </View>
        <Button block success style={styles.loginButton} onPress={onLogin}>
        <Text style={styles.loginText}>Login</Text>
      </Button>
      </Card>
    </View>



  )
}

export default LoginContainer