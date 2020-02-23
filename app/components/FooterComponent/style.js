import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#30007D'
    },
    image:{
        alignContent:'center',
        flex:0.25,
        aspectRatio:1.5,
        resizeMode:'contain',
        marginBottom:10,
        position:'relative'
    },
    icon:{
        marginLeft:8,
    },
    card:{
        backgroundColor:"#d3d3d3",
        borderRadius:30,
        height:230,
        width:390

    },
    loginButton:{
            backgroundColor:'#30007D',
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
        borderBottomColor: '#30007D',
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
    
    logo: {
        height:50,
        width:50,
        marginRight:170,
        marginTop:3    }
  })

export default styles;