import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import styles from './styles';
import {LoginContainer} from '../../components/LoginComponent';
import LoginController from '../../components/googleSignIn';
export default function Login() {
  const id = useSelector(state => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));

  
  return (
      
    <LoginContainer />
    /* <LoginController /> */

    
  );
}
