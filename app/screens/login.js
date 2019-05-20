//<Button
//            onPress={this.onLogin.bind(this)}

import React, {Component } from 'react';
import { Alert, 
         View, 
         Text,
         TextInput, 
         Image, 
         Button, 
         Linking} from 'react-native';

import {createStackNavigator} from 'react-navigation'

import {login} from '../themes/login_style'
import {Pin} from '../screens/Pin'

const userInfo = {username:'admin',password:'123456'};

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      clientid: '' ,
      password: ''
    };
  }
  onLogin = async() => {
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
          
          <Image source={require('../src/img/login_logo.png')} style={login.logoHome} />
          
          <Text style={login.header}> CLIENT ID </Text>
          
          <TextInput style={login.inputText}
          onChangeText={(clientid) => this.setState({clientid})}
          value={this.state.clientid} placeholder="Type in your Client ID"/>

          <Text style={login.header}> PASSWORD</Text>        

          <TextInput style={login.inputText}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password} 
             placeholder="Type in your Password"
             secureTextEntry={true}/>
          
        </View>


        <View style={login.buttonContainer}>
          <Button
           onPress={this.onLogin.bind()}
            title="NEXT"
            type = "solid"
            //color="#e17055" 
            color="#e74c3c"
            raised
            />
       </View>
          <Text style={login.forgotpass} 
             onPress={ ()=>{ Linking.openURL('https://kite.zerodha.com/forgot')}}>
              Forgot Your Password?</Text>        
	  
      </View>
    );
  }
}
