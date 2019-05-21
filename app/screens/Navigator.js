// Backup
// I have not configured this page yet. 
// App.js has the same code, I will eventually make App.js cleaner

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

import {Login} from '.Login'        
import {Pin} from '.Pin'
import {MarketScreen} from '.Market'
import {Orders} from '.Orders'
import {Holdings} from '.Holdings'
import {Notifications} from '.Notifications'


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


export const NavigatorKite = createAppContainer(LoginNav);