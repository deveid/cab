import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import SplashScreen from 'app/screens/Splash';
import Payment from 'app/screens/Payment';

const RNApp = createStackNavigator(
  {
    Splash:{
      screen: SplashScreen,
      navigationOptions: { headerShown: false } 
       },
    Login: {
      screen: Login,
      navigationOptions: { headerShown: false } 

    },
    Home: {
      screen: Home,
      navigationOptions: { headerShown: false } 
    },
     Landing: {
      screen: Payment,
      navigationOptions: { headerShown: false, } ,

    },
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(RNApp);
