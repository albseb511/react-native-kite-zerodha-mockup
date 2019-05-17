import React, {Component } from 'react';
//import {Button} from 'react-native-elements';
import { Alert, StyleSheet, View, Text , TextInput, Image, Button, Linking} from 'react-native';

export default class LoginScreen extends Component {
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
  _onSimplPress() {
    Alert.alert('LOGIN')
  }    

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.loginBox}>
          <Image source={require('./app/src/img/login_logo.png')} style={styles.logoHome} />
          <Text style={styles.header}> CLIENT ID </Text>
          <TextInput style={styles.inputText}
          onChangeText={(clientId) => this.setState({clientId})}
          value={this.state.text} placeholder="Type in your Client ID"/>

          <Text style={styles.header}> PASSWORD</Text>        
          <TextInput style={styles.inputText}
           onChangeText={(password) => this.setState({password})}
            value={this.state.text} 
           placeholder="Type in your Password"
           secureTextEntry={true}/>
          
        </View>


        <View style={styles.buttonContainer}>
          <Button
            onPress={this.onLogin.bind(this)}
            title="NEXT"
            type = "solid"
            //color="#e17055" 
            color="#e74c3c"
            raised
          />
        </View>
        <Text style={styles.forgotpass} 
        onPress={ ()=>{ Linking.openURL('https://kite.zerodha.com/forgot')}}>
        Forgot Your Password?</Text>        
	  
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center'
  },
  loginBox: {
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    width: 260,
    height: 70,
    marginTop: 5
    
  
  },
  logoHome:{
    marginTop: -100,
    marginBottom:100,
    width: 200,
    resizeMode: "contain"
  },
   inputText: {
     height: 40, 
     width: 300, 
     borderColor: 'gray', 
     borderBottomWidth: 0.5,
     marginBottom: 10
     
    },
    forgotpass:
    {
      marginTop: 10,
      fontSize: 12
    },
    header:
    {
      color: 'gray'
    }
});