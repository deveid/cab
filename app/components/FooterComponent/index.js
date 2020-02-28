import {Footer,FooterTab,Left,Right,Body,Button,Title} from 'native-base';
import React,{Component} from 'react';
import {Text,Image} from 'react-native';
import logo from '../../screens/Splash/logo.png'
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';  



export default class FooterComponent extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        value: ''
      }
    
      receivedValue = (value) => {
        this.setState({value})
      }

    render() {
    const {navigate} = this.props.navigation;
    //gas items
    const gas=[{
        title:"4kg",
        icon:"gas-cylinder",
        amount:'800',
    },
    {
        title:"12.5kg",
        icon:"gas-cylinder",
        amount:'4000',
    },
    {
        title:"26kg",
        icon:"gas-cylinder",
        amount:'8000',
    },
    ]
    return(
        <Footer style={{marginBottom:10,height:75}}>
            <FooterTab >
               {
                   gas.map((obj,index)=>{
                       return(
                           <Button key={index}  onPress={() => navigate('Paystack',{amount:obj.amount, receivedValue: this.receivedValue})}>
                                <Icon size={37} name={obj.icon} />
                                <Text style={{fontSize:12}}>{obj.title}</Text>
                                <Text>{'\u20A6'}<Text style={{fontSize:13,fontWeight: 'bold'}}>{obj.amount}</Text></Text>
                            </Button>
                       )
                   })
               }
            </FooterTab>
        </Footer>
    )

}
}
// export default FooterComponent;