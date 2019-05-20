import React, {Component } from 'react';

import { Alert, 
        StyleSheet, 
        View, 
        Text , 
        TextInput, 
        Image,
        Linking,
        TouchableOpacity,
        Button} from 'react-native';

import {createStackNavigator, 
        createAppContainer, 
        createDrawerNavigator, 
        createBottomTabNavigator,
        createSwitchNavigator} from 'react-navigation'

import {Login} from './app/screens/Login'        
import {Pin} from './app/screens/Pin'
import {MarketScreen} from './app/screens/Market'
import {Orders} from './app/screens/Orders'
import {Holdings} from './app/screens/Holdings'
import {Notifications} from './app/screens/Notifications'
import {Loading} from './app/screens/Loading'


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



const __DrawNav = createDrawerNavigator({
  Marketwatch: AppNav,
  Orders: Orders,
  Portfolio: Holdings,
  Notifications: Notifications,
});


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


const NavKite = createAppContainer(LoginNav);

export default class NavigatorKit extends Component {
  render(){
  return <NavKite />
  }
}