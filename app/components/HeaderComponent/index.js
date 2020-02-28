import {Header,Left,Right,Body,Button,Title,Icon} from 'native-base';
import React from 'react';
import {Text,Image} from 'react-native';
import logo from '../../screens/Splash/logo.png'
import styles from './style';

export const HeaderComponent=()=>{
    return(
        <Header style={{backgroundColor:"#3679D1"}} iosBarStyle="light-content">
             <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
          </Body>
                <Image style={styles.logo} source={logo}/>
        </Header>
    )
}

export default HeaderComponent;