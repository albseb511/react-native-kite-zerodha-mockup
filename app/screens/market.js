import React, {Component } from 'react';
import { Alert, StyleSheet, View, Text , TextInput, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default class Market extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      search: '',
      iconLeftColor: "gray",
      icon1Color: "#e74c3c",
      icon2Color: "gray",
      icon3Color: "gray",
      icon4Color: "gray",
      heightCard: 56,
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
    if(`${this.state.heightCard}`!=112)
    this.setState({
      heightCard: 56*2           
    })
    else
    this.setState({
      heightCard: 112/2           
    })

   }

   
  


  render() {    
    const { search } = this.state;

    return (
      <View style={styles.container}>


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



        <View  style={styles.aBarRow}>
          <View style={styles.aBarIcon}> 
             <Text style={{marginTop:20}}>
               <FontAwesome5 name={'search'}  size={15}/>
              </Text>
          </View>
          <TextInput  
            placeholder="Add"
            onChangeText={this.updateSearch}
            value={search}
            style = {styles.aBar}
          />
          <View style={styles.aBarBox}>
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

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'column',
   alignItems: 'center',
   
  },
  loginBox: {
    justifyContent: 'center',
    marginTop: 200
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
    GB:{
      marginTop: 10,
      fontSize: 10,
      marginRight: 30
    },
    forgotPIN:
    {
      marginTop: 10,
      fontSize: 10,
      marginLeft: 30
    },
    header:
    {
      color: 'gray'
    },
    pinPageText:
    {
      flexDirection: 'row'
    },
    toolbar: {
      backgroundColor: '#2196F3',
      height: 56,
      alignSelf: 'stretch',
      textAlign: 'center',
      marginBottom: 200,
    }, 
    aBar: {
      justifyContent: 'flex-start',
      width:300,
      color:"#000",
      marginTop: 15,
      marginBottom:0,
      marginRight:5,
      flex:5.5,
      borderBottomWidth:1,
      alignSelf:'center',
      bottom: 5

    },
    aBarIcon:{
      flex:0.5,
      width:40,
      height:40,
      marginTop: 20,
      marginRight: 10,
      marginLeft: 15
    },
    aBarBox:{
      flex:1,
      width: 30,
      height:30,
      borderWidth:0,
      marginTop: 20,
      marginRight: 10,
      marginLeft: 10,
      flexDirection: 'row'
    },
    aBarRow: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      height: 80,
      
    },

})

const cards = StyleSheet.create({
  companyCard: {
    height: 75,
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderColor: 'gray'
  },
  companyDetails: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  companyPrice: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    
    
  },
  ltext: {
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10

  },
  stext: {
    fontSize: 10,
    marginLeft: 10,
    marginRight: 10    
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10/2,
    borderWidth:0.5,
    marginTop: 5,
    marginRight:-5
},
 right: {
   alignSelf: 'flex-end',
  
 }

})

const navBar = StyleSheet.create({
  topBar:{
    height: 56,
    flexDirection: 'row'
  },
  icon: {
    flex:1,
    
  },
  leftIcon:{
    flex:3,
  }

});