import {StyleSheet,Dimensions} from 'react-native';

const config = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: 'white',
    },
    listHeader: {
      backgroundColor: '#eee',
      color: "#222",
      height: 44,
      padding: 12
    },
    detailContainer: {
      paddingHorizontal: 20
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingTop: 10
    },
    message: {
      fontSize: 14,
      paddingBottom: 15,
      borderBottomColor: "#ccc",
      borderBottomWidth: 1
    },
    dp:{
      marginTop: 32,
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: 'white',
      
    },
    b1:{
      position:'relative',     
      bottom:0,
      flex: 1,
      justifyContent: 'flex-end',
      marginTop:config.deviceHeight/2
      
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    buttonContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: 'black',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: 'black',
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: 'black',
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  })
  export default styles;