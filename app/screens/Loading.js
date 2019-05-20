//<Button
//            onPress={this.onLogin.bind(this)}

import React, {Component } from 'react';
import { Alert, 
         View, 
         Text,
         TextInput, 
         Image, 
         ActivityIndicator,
         StatusBar,
         AsyncStorage 
         } from 'react-native';

import {createStackNavigator} from 'react-navigation'

import {login} from '../themes/login_style'
import {Pin} from '../screens/Pin'

export class Loading extends Component {
  constructor(props) {
    super(props);
    this.loaddata()

  }
  loaddata = async() => {
    const {clientid, password} = this.state
    if(userInfo.username===clientid && userInfo.password===password)
    this.props.navigation.navigate('Pin')
    else
    Alert.alert('Wrong information')
  }

  render() {
    return (
      <View style={login.container}>
        
        <View style={login.loginBox}>
          
          <Image source={require('../src/img/ic_launcher.png')} style={login.logoHome} />
                    
        </View>
        <ActivityIndicator />
        <StatusBar barstyle="default" />
      </View>
    );
  }
}
