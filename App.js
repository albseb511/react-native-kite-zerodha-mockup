import React, {Component } from 'react';
import { Alert, StyleSheet, View, Text , TextInput, TouchableOpacity} from 'react-native';
import {appStyle, cards, navBar} from './app/themes/appStyle'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {createStackNavigator, createAppContainer} from 'react-navigation'

import Login from './app/screens/Login'


class TestScreen extends Component {
  render()
  {
    return(
    <View>
      <Text>Hi</Text>
    </View>
    ) 
  }

};



const AppNav = createStackNavigator({
  Login: {screen:Login}
});

export default createAppContainer(AppNav);
