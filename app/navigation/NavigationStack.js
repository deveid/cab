import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import SplashScreen from 'app/screens/Splash';

const RNApp = createStackNavigator(
  {
    Splash:{
      screen: SplashScreen,
      navigationOptions: { headerShown: false } 
       },
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
      navigationOptions: { headerShown: false } 
    },
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(RNApp);
