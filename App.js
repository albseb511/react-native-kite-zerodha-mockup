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
//import {KiteDrawer} from './app/components/Drawer'

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

// CUSTOM DRAWER START
const KiteDrawer = (props) => (
  <SafeAreaView style={{flex:1}}>
    <View style={{height:150, backgroundColor:"#e74c3c",padding:10,justifyContent:'space-evenly'}}>
    <Image source={require('./app/src/img/zerodha.png')} 
            style={{alignSelf:'flex-end', height:20, resizeMode:'contain'}}/>
      <Image source={require('./app/src/img/ic_loading.png')} 
             style={{width:30,
                    height:30,
                    borderRadius:15, 
                    backgroundColor:"white",
                    marginBottom:10}}/>
      <Text style={{color:"white",marginBottom:10}}>Albert Sebastian</Text>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={{color:"white", fontSize:12}}>$ClientID</Text>
        <Text style={{color:"white", fontSize:12}}>$version</Text>
      </View>
    </View>
    <View style={{height:100, backgroundColor:"#fff",padding:10,alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
              <View>
                <View style={{width:5, height:75,backgroundColor:"green", position:'absolute', left:-15, top:-7.5}}/>
                <View style={{alignContent:'center'}}>
                  <Text style={{color:"black"}}>NIFTY 50</Text>
                  <Text style={{fontSize:12}}>11257.10</Text>
                  <Text style={{fontSize:12}}>100.1 (0.90%)</Text>
                </View>
              </View>

              <View>
                <View style={{width:5, height:75,backgroundColor:"green", position:'absolute', left:-15, top:-7.5}}/>
                <View style={{alignContent:'center'}}>
                  <Text style={{color:"black"}}>SENSEX</Text>
                  <Text style={{fontSize:12}}>37393.48</Text>
                  <Text style={{fontSize:12}}>278.6.1 (0.75%)</Text>
                </View>
              </View>
              
    </View>
    <ScrollView>
        <DrawerItems {...props} />
        <View>
          <Text style={{padding:20,borderTopWidth:0.5}}>ACCOUNT</Text>

          <TouchableOpacity style={{flexDirection:'row', padding:20}}>
            <FontAwesome5 name={'money-bill-wave'}  size={15} />
            <Text style={{paddingLeft:25}}>Funds</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection:'row', padding:20}}>
            <FontAwesome5 name={'life-ring'}  size={15} />
            <Text style={{paddingLeft:25}}>User manual</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection:'row', padding:20}}>
            <FontAwesome5 name={'power-off'}  size={15} />
            <Text style={{paddingLeft:25}}>Logout</Text>
          </TouchableOpacity>


        </View>
    </ScrollView>

  </SafeAreaView>
)

// CUSTOM DRAWER END


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
  Marketwatch: AppNav,
  Orders: Orders,
  Portfolio: Holdings,
  Notifications: Notifications,
},{
  contentComponent: KiteDrawer,
});

// I made it initally as Switch Navigator, removed it and 
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