import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import SplashScreen from 'app/screens/Splash';
import Landing from 'app/screens/Landing';
import Paystack from '../components/Paystack/';
 import Swipe from '../components/Swipe';

const RNApp = createStackNavigator(
  {
    Splash:{
      screen: SplashScreen,
      navigationOptions: { headerShown: false } 
       },
    Landing: {
      screen: Landing,
      navigationOptions: { headerShown: false  } 

    },
    Login: {
      screen: Login,
      navigationOptions: { headerShown: false } 

    },
    Home: {
      screen: Home,
      navigationOptions: { headerShown: false } 
    },
     Paystack: {
      screen: Paystack,
      navigationOptions: { headerShown: false, } ,

    },
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(RNApp);
