import React, {Component } from 'react';
import { Alert, StyleSheet, View, Text , TextInput, TouchableOpacity} from 'react-native';
import {appStyle, cards, navBar} from './app/themes/appStyle'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {createStackNavigator, createAppContainer} from 'react-navigation';

class Market extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      search: '',
      iconLeftColor: "gray",
      icon1Color: "#e74c3c",
      icon2Color: "gray",
      icon3Color: "gray",
      icon4Color: "gray",
      heightCard: 75,
      visibility: 0
    };
    
  }
//Search Bar
  updateSearch = search => {
    this.setState({ search });
  };
//Go back button
  _onGoBack() {
    Alert.alert('GOTO HOME')
  }    
//Login button
  onLogin() {
    const { PIN } = this.state;
    if(PIN!=null)
    Alert.alert('Credentials', `${PIN}`);
  }

//On Press function
  onPressIconLeft = () => {
    this.setState({
      iconLeftColor : "#e74c3c",
      icon1Color: "gray",
      icon2Color: "gray",
      icon3Color: "gray",
      icon4Color: "gray"
    })

   }
  
   onPressIcon1 = () => {
    this.setState({
      iconLeftColor : "gray",
      icon1Color: "#e74c3c",
      icon2Color: "gray",
      icon3Color: "gray",
      icon4Color: "gray"
    })

   }

   onPressIcon2 = () => {
    this.setState({
      iconLeftColor : "gray",
      icon1Color: "gray",
      icon2Color: "#e74c3c",
      icon3Color: "gray",
      icon4Color: "gray"
    })

   }

   onPressIcon3 = () => {
    this.setState({
      iconLeftColor : "gray",
      icon1Color: "gray",
      icon2Color: "gray",
      icon3Color: "#e74c3c",
      icon4Color: "gray"
    })

   }

   onPressIcon4 = () => {
    this.setState({
      iconLeftColor : "gray",
      icon1Color: "gray",
      icon2Color: "gray",
      icon3Color: "gray",
      icon4Color: "#e74c3c",
    })

   }
//CARD EXPAND TOGGLE FUNCTION
   cardExpand = () => {
    if(`${this.state.heightCard}`!=150)
    this.setState({
      heightCard: 75*2           
    })
    else
    this.setState({
      heightCard: 150/2           
    })

   }

   
  


  render() {    
    const { search } = this.state;

    return (
      <View style={appStyle.container}>


      <View style={navBar.topBar}>
        
        <View style={navBar.leftIcon}>
          
          <Text style={{margin: 20}} onPress={this.onPressIconLeft.bind()}>
            
              <FontAwesome5 name={'bars'}  size={25} color={this.state.iconLeftColor}/>
            
          </Text>
        </View>  

        <View style={navBar.icon}>
         <Text style={{marginTop: 20}} onPress={this.onPressIcon1.bind()}>
            <FontAwesome5 name={'binoculars'} size={25} color={this.state.icon1Color}/>
          </Text>
        </View>

        <View style={navBar.icon}>
           <Text style={{marginTop: 20}} onPress={this.onPressIcon2.bind()}>
              <FontAwesome5 name={'book-open'} size={25} color={this.state.icon2Color}/>
            </Text>  
        </View>

        <View style={navBar.icon}>
              <Text style={{marginTop: 20}} onPress={this.onPressIcon3.bind()}>
                <FontAwesome5 name={'suitcase'} size={25} color={this.state.icon3Color}/>
              </Text>
        </View>

        <View style={navBar.icon}>
              <Text style={{marginTop: 20}} onPress={this.onPressIcon4.bind()}>
                <FontAwesome5 name={'bell'} size={25} color={this.state.icon4Color}/>
              </Text>
        </View>
      
      </View>



        <View  style={navBar.aBarRow}>
          <View style={navBar.aBarIcon}> 
             <Text style={{marginTop:20}}>
               <FontAwesome5 name={'search'}  size={15}/>
              </Text>
          </View>
          <TextInput  
            placeholder="Add"
            onChangeText={this.updateSearch}
            value={search}
            style = {navBar.aBar}
          />
          <View style={navBar.aBarBox}>
              <Text style={{marginTop: 5}}>
                <FontAwesome5 name={'binoculars'}  size={25}/>
              </Text>
              <Text style={{justifyContent:'center', fontSize:20, marginTop: 5}}> 1</Text>  
          </View>    
        </View> 
       

        <TouchableOpacity 
          style = {[cards.companyCard, {height:this.state.heightCard},]}
           onPress = {this.cardExpand.bind()} >
          <View style = {cards.companyDetails}>
            <View style = {{flexDirection:'row'}}>
              <Text style = {cards.ltext}>N100</Text> 
            </View>

            <View style = {{flexDirection:'row'}}>
              <Text style = {cards.stext}>NSE</Text> 
            </View>
          </View>

          <View style = {cards.companyPrice}>
            <View style = {{flexDirection:'row', alignSelf: 'flex-end',}}>
              <View style= {cards.circle}>
                <Text style = {[cards.ltext, cards.right]}>520.84</Text> 
              </View>

              <View style = {{flexDirection:'row', alignSelf: 'flex-end',}}>
                <Text style = {[cards.stext, cards.right]}>7.12 (1.39%)</Text> 
              </View>      
            </View>
          </View>
        </TouchableOpacity>

        
      
        <TouchableOpacity style = {[cards.companyCard, ]} >
          <View style = {cards.companyDetails}>
            <View style = {{flexDirection:'row'}}>
              <Text style = {cards.ltext}>N100</Text> 
            </View>

            <View style = {{flexDirection:'row'}}>
              <Text style = {cards.stext}>NSE</Text> 
            </View>
          </View>

          <View style = {cards.companyPrice}>
            <View style = {{flexDirection:'row', alignSelf: 'flex-end',}}>
              <View style= {cards.circle}>
                <Text style = {[cards.ltext, cards.right]}>520.84</Text> 
              </View>

              <View style = {{flexDirection:'row', alignSelf: 'flex-end',}}>
                <Text style = {[cards.stext, cards.right]}>7.12 (1.39%)</Text> 
              </View>      
          </View>
          </View>
        </TouchableOpacity>

        
        <TouchableOpacity style = {[cards.companyCard, ]} >
          <View style = {cards.companyDetails}>
            <View style = {{flexDirection:'row'}}>
              <Text style = {cards.ltext}>N100</Text> 
            </View>

            <View style = {{flexDirection:'row'}}>
              <Text style = {cards.stext}>NSE</Text> 
            </View>
          </View>

          <View style = {cards.companyPrice}>
            <View style = {{flexDirection:'row', alignSelf: 'flex-end',}}>
              <View style= {cards.circle}>
                <Text style = {[cards.ltext, cards.right]}>520.84</Text> 
              </View>

              <View style = {{flexDirection:'row', alignSelf: 'flex-end',}}>
                <Text style = {[cards.stext, cards.right]}>7.12 (1.39%)</Text> 
              </View>      
            </View>
          </View>
        </TouchableOpacity>        
        
     </View>

    );
  }
}

export default class mainHome extends Component {
  render()
  {
    return(
      <AppC />
    );
  }
}

const AppStackNav = createStackNavigator ({
 Home: Market
});
const AppC = createAppContainer(AppStackNav);

const styles = StyleSheet.create({
  ttt:{
    
    backgroundColor: "#ff0",
    height: 50
  },
  t4:{
    flex:1
  }
});