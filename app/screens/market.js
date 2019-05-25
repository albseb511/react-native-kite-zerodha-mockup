import React, {Component} from 'react';
import { Alert, 
        StyleSheet, 
        View, 
        Text , 
        TextInput, 
        TouchableOpacity} from 'react-native';
import {appStyle, cards, navBar} from '../themes/appStyle'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {createStackNavigator, createAppContainer} from 'react-navigation'

import CardCompany from '../components/Components'
import { Card } from 'react-native-elements';

export class MarketScreen extends Component {
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
      heightCard2: 0,
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
   //   heightCard: 75*2,
       
    })
    else
    this.setState({
    //  heightCard: 150/2 ,
              
    })

   }

   cardExpand2 = () => {
    if(`${this.state.heightCard}`!=150)
    this.setState({
      heightCard: 75*2,
      heightCard2: 75           
    })
    else
    this.setState({
      heightCard: 150/2,
      heightCard2: 0          
    })

   }

   
  


  render() {    
    const { search } = this.state;

    return (
      <View style={appStyle.container}>


      <View style={navBar.topBar}>
        
        <View style={navBar.leftIcon}>
          
          <Text style={{margin: 20}} onPress={() => this.props.navigation.openDrawer()}>
            
              <FontAwesome5 name={'bars'}  size={25} color={this.state.iconLeftColor}/>
            
          </Text>
        </View>  

        <View style={navBar.icon}>
         <Text style={{marginTop: 20}} onPress={this.onPressIcon1.bind()}>
            <FontAwesome5 name={'binoculars'} size={25} color={this.state.icon1Color}/>
          </Text>
        </View>

        <View style={navBar.icon}>
           <Text style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('Orders')}>
              <FontAwesome5 name={'book-open'} size={25} color={this.state.icon2Color}/>
            </Text>  
        </View>

        <View style={navBar.icon}>
              <Text style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('Portfolio')}>
                <FontAwesome5 name={'suitcase'} size={25} color={this.state.icon3Color}/>
              </Text>
        </View>

        <View style={navBar.icon}>
              <Text style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('Notifications')}>
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
          style = {[cards.companyCard, {},]}
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

        
      <View style={[appStyle.cardContainer, {height:this.state.heightCard}]}> 
        <TouchableOpacity style = {cards.companyCard} onPress={this.cardExpand2.bind()} >
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

        <View style = {[cards.companyHidden,{height:this.state.heightCard2}]} >
          <TouchableOpacity style={appStyle.circle}>
            <FontAwesome5 name="chart-bar" size={20} style={cards.companyAction}/>
          </TouchableOpacity>
          <TouchableOpacity style={appStyle.circle}>
            <FontAwesome5 name="file-alt" size={20} style={cards.companyAction}/>
          </TouchableOpacity>
          <TouchableOpacity style={appStyle.circle}>
            <FontAwesome5 name="credit-card" size={20} style={cards.companyAction}/>
          </TouchableOpacity>
          <TouchableOpacity style={appStyle.circle}>
            <Text style={[cards.companyAction,{color:"turquoise"}]}>B</Text>
          </TouchableOpacity>
          <TouchableOpacity style={appStyle.circle}> 
            <Text style={[cards.companyAction,{color:"#e74c3c"}]}>S</Text>
          </TouchableOpacity>
        </View>
        

      </View>
        
        <TouchableOpacity style = {[cards.companyCard, ]} >
          <View style = {cards.companyDetails}>
            <View style = {{flexDirection:'row'}}>
              <Text style = {cards.ltext}>N1100</Text> 
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
