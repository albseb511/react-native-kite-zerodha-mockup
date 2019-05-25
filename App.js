import React, {Component } from 'react';

import { Alert, 
        StyleSheet, 
        View, 
        Text , 
        TextInput, 
        Image,
        Linking,
        TouchableOpacity,
        SafeAreaView,
        ScrollView,
        Button} from 'react-native';

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
import {homeNB} from './app/screens/nb/home'
import {pageSimpl} from './app/screens/nb/simpl'
import {pageUnlock} from './app/screens/nb/unlock'

//import firebase from 'firebase'
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

//FIREBASE - NEED TO INSTALL FIREBASE
/*
var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id",
};
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
  homeNB: homeNB,
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
//Change DashScreen to __DashNav
const _SwitchApp = createStackNavigator({
  homeNB: homeNB,
  pageSimpl: pageSimpl,
  pageUnlock: pageUnlock

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
const NavKite = createAppContainer(_SwitchApp);

export default class NavigatorKit extends Component {
  render(){
  return <NavKite />
  }
}