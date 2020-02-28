import React from 'react';
import { View, Text,Image } from 'react-native';
import styles from './styles'
import background from './logo.png'

const FIVE_SECONDS = 5000;

export default class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      
      this.props.navigation.navigate('Landing');
    }, FIVE_SECONDS);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={background}/>
      </View>
    );
  }
}