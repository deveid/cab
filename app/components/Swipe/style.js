import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const config = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height
}

export const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 1,
  },
  container: {
    borderColor: '#ebebeb',
    borderRadius: 0,
    shadowColor: '#fcfcfc',
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 0
    },
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bullets: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  btn:{
    width:70,
    bottom:0,
    position:'absolute',
    marginBottom:20,
    marginLeft:10,
    marginRight:12,
    paddingLeft:4,

  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20,
    marginBottom:5
  }
});

export default styles;