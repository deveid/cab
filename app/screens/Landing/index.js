import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
// import styles from './styles';
import Carousel from '../../components/Swipe';
import delivery from './delivery.png';
import delivery1 from './delivery1.png';
import {Button} from 'native-base';
import styles from './styles';

export default class Landing extends React.Component{

  constructor(props) {
    super(props);
}

  render(){
  
  return (
    <View>
    <Carousel style="slides"
              itemsPerInterval={1}
              items={[{
                  image: delivery1,
                  }, {
                  image: delivery,
                  }, {
                  title: 'd1',
      }]}  />
     
      <Button style={styles.btn} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.text}>Skip</Text>
        </Button>
    </View>
  );
}
}