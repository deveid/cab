import PaystackWebView from 'react-native-paystack-webview'
import React, { Component } from 'react'
import { View } from 'react-native';
import {Button} from 'native-base';
  class  Landing  extends  React.Component { 

	constructor(props){
	super(props);
	const { navigation }  = this.props;
    
  	}
	
	onNextPress=()=>{this.props.navigation.navigate('Home');}

	  render() {
	
	const changeAmount = this.props.navigation.getParam('amount', 1000);

		  return (
			  <PaystackWebView 
			  	buttonText=  "Pay Now"
				amount={changeAmount}
			  	paystackKey="pk_test_fa7242e4cd5797eb87209969b259adf208abee82"
			 	billingEmail="deveid@gmail.com"
			 	billingMobile="08079895427"
			 	billingName="Akande Tolu"
			 	ActivityIndicatorColor="green"
				onCancel={this.onNextPress}
				onSuccess={this.onNextPress}
			 />
	 );
	 }
}
export default Landing;

