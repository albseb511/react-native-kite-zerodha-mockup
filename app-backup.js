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


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {createStackNavigator, 
        createAppContainer, 
        createDrawerNavigator, 
        createBottomTabNavigator,
        createSwitchNavigator} from 'react-navigation'

import {Login} from './app/screens/Login'        
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
  Welcome: Login,
  DashScreen: __DrawNav
})

export default createAppContainer(_SwitchApp);