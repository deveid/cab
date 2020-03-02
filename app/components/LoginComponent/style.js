import { StyleSheet,Dimensions } from 'react-native';

const config={
  deviceWidth:Dimensions.get('window').width,
  deveiceHeight:Dimensions.get('window').height
}
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      borderTopColor: "#3679D1",
      borderTopWidth: config.deviceWidth / 2,
      borderRightWidth: config.deviceWidth,
      borderRightColor: 'white',
      flex:1,
    },
    image:{
        flex:0.5,
        resizeMode:'contain',
        marginBottom:10,
        flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      aspectRatio:2.1
    },
    icon:{
        marginLeft:8,
    },
    smallcontainer:{
        marginBottom:100
    },
    card:{
        backgroundColor:"#d3d3d3",
        borderRadius:30,
        height:230,
        width:390,
        marginTop:10,
        marginLeft:10

    },
    loginButton:{
            backgroundColor:'#3679D1',
            marginLeft:100,
            marginRight:100,
            borderRadius:30,
            marginTop:5
        },
    loginText:{
        color:"#ffffff",
        fontWeight:'bold'

    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:350,
        height:45,
        marginBottom:8,
        flexDirection: 'row',
        alignItems:'center',
        marginTop:20,
        marginLeft:14
        
    
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#3679D1',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    
    loginText: {
      color: 'white',
    }
  })

export default styles;