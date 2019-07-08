import React, {Component } from 'react';

import {Text } from 'react-native';

import {createStackNavigator, 
        createAppContainer, 
        createDrawerNavigator, 
        createBottomTabNavigator,
        createSwitchNavigator,
        DrawerItems} from 'react-navigation'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {Login} from './app/screens/Login'        
import {Pin} from './app/screens/Pin'
import {MarketScreen} from './app/screens/Market'
import {Orders} from './app/screens/Orders'
import {Holdings} from './app/screens/Holdings'
import {Notifications} from './app/screens/Notifications'
import {Loading} from './app/screens/Loading'
import { Icon } from 'react-native-elements';
import {KiteDrawer} from './app/components/Drawer'
//import {homeNB} from './app/screens/nb/home'

/* Dash Tab Navigator Definition
 const __DashTab = createBottomTabNavigator ({
 MarketScreen,
 Orders,
 Holdings,
 Notifications
  

})  
To use remove MarketScreen from AppNav StackNavigator,
and change to __DashTab
*/


//STACK NAVIGATOR DEFINITION
const AppNav = createStackNavigator({
  DASHTB:  MarketScreen
  
},
{
  headerMode: 'none',
  defaultNavigationOptions: ({navigation})=>{
    return{
      headerLeft:(
        <Text >SETTINGS </Text>
      )
    }
  }
 
}
);


//DRAWER NAVIGATION DEFINITION
const __DrawNav = createDrawerNavigator({
  //homeNB: homeNB,
  Marketwatch: AppNav,
  Orders: Orders,
  Portfolio: Holdings,
  Notifications: Notifications,
  Logout:Login,
  
},{
  contentComponent: KiteDrawer,
});


// I made it initially as Switch Navigator, removed it and 
// changed to StackNavigator. I made LoginNav as a SwitchNavigator
const _SwitchApp = createStackNavigator({
  Pin: Pin,
  DashScreen: __DrawNav
},
{
     headerMode:'none'
  }
)


const LoginNav = createSwitchNavigator ({
  Loading: Loading,
  Login: Login,
  DashScreen: _SwitchApp

},{
  headerMode: 'none',
  initialRouteName: 'Loading',
  
}
)

//Use __DrawNav for going to dashboard page directly
//Use LoginNav to goto login page
const NavKite = createAppContainer(__DrawNav);

export default class NavigatorKit extends Component {
  render(){
  return <NavKite />
  }
}