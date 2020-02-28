import { StyleSheet,Dimensions } from 'react-native'

const config = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height
}
export const styles = StyleSheet.create({
  slide: {
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  slideText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
  },
  bg:{
    width:config.deviceWidth,
    height:config.deviceHeight
  }
});

export default styles;