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


// Dash Tab Navigator Definition
const __DashTab = createBottomTabNavigator ({
  MarketScreen,
  Orders,
  Holdings,
  Notifications
  

})


//STACK NAVIGATOR DEFINITION
const AppNav = createStackNavigator({
  DASHTB:  __DashTab
  
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


const _SwitchApp = createSwitchNavigator({
  DashScreen: __DrawNav
},
)


const LoginNav = createStackNavigator ({
  Login: Login,
  Pin: Pin,
  DashScreen: _SwitchApp

},{
  headerMode: 'none'
}
)


export default createAppContainer(LoginNav);