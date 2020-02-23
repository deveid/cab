import PaystackWebView from 'react-native-paystack-webview'
import React, { Component } from 'react'
import { View } from 'react-native'

  class  Landing  extends  React.Component { 
	  		  onNextPress=()=>{this.props.navigation.navigate('Home');}

	  render() {
		  return (
			  <PaystackWebView 
			  buttonText=  "Pay Now"
			  paystackKey="pk_test_fa7242e4cd5797eb87209969b259adf208abee82"
			  amount={120000}
			 billingEmail="deveid@gmail.com"
			 billingMobile="08079895427"
			 billingName="Akande Tolu"
			 ActivityIndicatorColor="green"
			 onCancel={this.onNextPress}
			 />
	 );
	 }
}
export default Landing;

