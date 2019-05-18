import {createStackNavigator, createAppContainer} from 'react-navigation';
//import Market from './Market';
import Holdings from './Holdings';
//import Pin from './Pin';
import Login from './Login';
import Orders from './Orders';
import Notifications from './Notifications';

const AppNavigator = createStackNavigator({
    Login: Login,
   // Pin: {screen: Pin},
 //   Market: {screen: Market},
    Holdings: Holdings,
    Orders: Orders,
    Notifications: Notifications
    },{
        initialRouteName: Login
      }
);

export default AppNav = createAppContainer(AppNavigator);