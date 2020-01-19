import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Container} from 'native-base';
import { MapContainer} from '/home/david/new_tax/cab/app/components/MapContainer';
// import getCurrentLocation from '/home/david/new_tax/cab/app/actions/currentLocation';

class Home extends React.Component{


  componentDidMount(){
    this.props.getCurrentLocation;
  }

  render(){
    const region={
      latitude:3.14662,
      longitude:101.6984,
      latitudeDelta:0.0922,
      longitudeDelta:0.04221
    }
    return(
      <Container>
          <MapContainer region={region}/>
        
      </Container>
    );
  }
  
}

export default Home;