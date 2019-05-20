//<Button
//            onPress={this.onLogin.bind(this)}

import React, {Component } from 'react';
import { Alert, 
         View, 
         Image, 
         ActivityIndicator,
         StatusBar,
         AsyncStorage 
         } from 'react-native';

import {createStackNavigator} from 'react-navigation'

import {login} from '../themes/login_style'

export class Loading extends Component {
  constructor(props) {
    super(props);
     this.loadData()

  }
  loadData = async() => {
  // const logged = await AsyncStorage.getItem('logged');
  //  this.props.navigation.navigate(logged !== '1'? 'Login'||'DashScreen')
  Alert.alert('LOADING SCREEN DONE')
  this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={login.container}>
        
        <View style={login.loginBox} onPress= {this.loadData.bind()}>
          <Image source={require('../src/img/ic_loading.png')} 
            style={login.logoLoading} 
            />           
        </View>
        <ActivityIndicator />
        <StatusBar barstyle="default" />
      </View>
    );
  }
}
