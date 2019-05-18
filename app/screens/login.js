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

import {login} from '../themes/login_style'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      clientid: '' ,
      password: ''
    };
  }
  onLogin() {
    const { clientId, password } = this.state;
    if(clientId!=null)
    Alert.alert('Credentials', `${clientId} + ${password}`);
  }

  render() {
    return (
      <View style={login.container}>
        
        <View style={login.loginBox}>
          
          <Image source={require('../src/img/login_logo.png')} style={login.logoHome} />
          
          <Text style={login.header}> CLIENT ID </Text>
          
          <TextInput style={login.inputText}
          onChangeText={(clientId) => this.setState({clientId})}
          value={this.state.text} placeholder="Type in your Client ID"/>

          <Text style={login.header}> PASSWORD</Text>        

          <TextInput style={login.inputText}
            onChangeText={(password) => this.setState({password})}
            value={this.state.text} 
             placeholder="Type in your Password"
             secureTextEntry={true}/>
          
        </View>


        <View style={login.buttonContainer}>
          <Button
           onPress={() => this.props.navigation.navigate('DashScreen')}
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
