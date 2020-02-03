import { Dimensions } from "react-native";
var width = Dimensions.get("window").width; //full width

const styles = {
    searchResult:{
        top:158,
        position:"absolute",
        width:width,
        opacity:0.9,
        height:1000,
        backgroundColor:"#fff"
    },
    inputWrapper:{
        marginLeft:15,
        marginRight:10,
        marginTop:10,
        marginBottom:0,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7
    },
    leftIcon:{
        fontSize:20,
        color:"#7D7D7D"
    },
    leftContainer:{
        flexWrap:"wrap",
        alignItems:"flex-start",
        borderLeftColor:"#7D7D7D",
    },
    leftText:{
        marginTop:15,
    },

};

export default styles;