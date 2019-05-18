import React, {Component } from 'react';

import { Alert, 
        StyleSheet, 
        View, 
        Text , 
        TextInput, 
        TouchableOpacity,
        Button} from 'react-native';

import {appStyle, 
        cards, 
        navBar} from './app/themes/appStyle'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {createStackNavigator, 
        createAppContainer, 
        createDrawerNavigator, 
        createBottomTabNavigator,
        createSwitchNavigator} from 'react-navigation'

import Login from './app/screens/Login'


class Welcome extends Component {
  render()
  {
    return (
      <View>
      <Button title="LOGIN" onPress={() => this.props.navigation.navigate('DashScreen')}/>
      <Button title="SIGN UP" onPress={() => alert('button pressed')}/>
      </View>
      );
  }

};

class DashScreen extends Component {
  render()
  {
    return(
      
    <View>
      <Text>DASHBOARD SCREEN</Text>
    </View>
    ) 
  }

};





// SCREENS FOR DASHTAB BOTTOM


// SCREENS

class Settings extends Component {
  render()
  {
    return(
      
    <View>
      <Text>Settings</Text>
    </View>
    ) 
  }

};

class Orders extends Component {
  render()
  {
    return(
      
    <View>
      <Text>Orders</Text>
    </View>
    ) 
  }

};

class Portfolio extends Component {
  render()
  {
    return(
      
    <View>
      <Text>Portfolio</Text>
    </View>
    ) 
  }

};

class Notifications extends Component {
  render()
  {
    return(
      
    <View>
      <Text>Notifications</Text>
    </View>
    ) 
  }

};

class Marketwatch extends Component {
  render()
  {
    return(
      
    <View>
      <Text>Marketwatch</Text>
    </View>
    ) 
  }

};


// Dash Tab Navigator Definition
const __DashTab = createBottomTabNavigator ({
  Marketwatch,
  Orders,
  Portfolio,
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
  Portfolio: Portfolio,
  Notifications: Notifications,
});



const _SwitchApp = createSwitchNavigator({
  Welcome: Welcome,
  DashScreen: __DrawNav
})

export default createAppContainer(_SwitchApp);