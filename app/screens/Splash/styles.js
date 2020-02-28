import { StyleSheet,Dimensions } from 'react-native';

const config = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width:config.deviceWidth,
    height:config.deviceHeight,
    backgroundColor:'white'
    },
  img:{
    alignItems: 'center',
    width:200,
    height:200,

  }
});

export default styles;

