import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Container} from 'native-base';
import { MapContainer} from '../../components/MapContainer';
import GetLocation from 'react-native-get-location'
import {Dimensions} from "react-native";
import {
        getCurrentLocation,
        getInputData,
        toggleSearchResultModal,
} from '../../actions/currentLocation';
import {HeaderComponent} from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';


const {width,height}=Dimensions.get("window");
const ASPECT_RATIO=width/height;
const LATITUDE_DELTA=0.0012;
const LONGITUDE_DELTA=ASPECT_RATIO*LATITUDE_DELTA

class Home extends React.Component{

  constructor(props){
    super(props);
    this.state={
      latitude:3.14662,
      longitude:101.6984,
      latitudeDelta:LATITUDE_DELTA,
      longitudeDelta:LONGITUDE_DELTA
    }
  }
  componentDidMount(){
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
  })
  .then(location => {
      this.setState({
      latitude:location.latitude,
      longitude:location.longitude
      })
      console.log(location)
      console.log(this.state.longitude);
  })
  .catch(error => {
      const { code, message } = error;
      console.warn(code, message);
  })  }

  render(){
    const region={
      latitude:this.state.latitude,
      longitude:this.state.longitude,
      latitudeDelta:this.state.latitudeDelta,
      longitudeDelta:this.state.longitudeDelta
    }
    return(
      <Container>
          <HeaderComponent />
          <MapContainer region={region} 
          getInputData={this.props.getInputData}
          toggleSearchResultModal={this.props.toggleSearchResultModal}
           />
           <FooterComponent navigation={this.props.navigation}/>
      </Container>
    );
  }
  
}

export default Home;