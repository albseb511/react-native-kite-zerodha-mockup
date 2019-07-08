import React, {Component} from 'react'

import { Alert, 
        StyleSheet, 
        View, 
        //Text , 
        TextInput, 
        Image,
        TouchableOpacity,
        FlatList,
        Text,
        Button} from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {createStackNavigator, createAppContainer} from 'react-navigation'




const userInfo = {phoneno:'9901582145',OTP:'1234'}

//FIREBASE
import * as firebase from 'firebase'
import {firebaseConfig} from './config'
//import { FlatList } from 'react-native-gesture-handler';
//import console = require('console');
// The core Firebase JS SDK is always required and must be listed first 
//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#config-web-app -->
// Your web app's Firebase configuration

// Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

//END OF FIREBASE
var machineID = 1100
var machineStatus = 0
var userPhone ='9901582145'
var userOTP ='1234'
var data=["chicken","paneer"]

var Stock = {
    A1:{
        name:'Chicken Sandwich',
        price:'140',
        qty:10,
        count:0,
        id:1,
        image: "https://source.unsplash.com/user/briansuman/80x80"
    },
    A2:{
        name:'Idly Vada',
        price:'100',
        qty:'10',
        count:0,
        id:2,
        image: "https://source.unsplash.com/user/briansuman/80x80"
    },
    A3:{
        name:'Chilli Chicken Cheese Maggi',
        price:'100',
        qty:'10',
        count:0,
        id:3,
        image: "https://source.unsplash.com/user/briansuman/80x80"
    },
    A4:{
        name:'Roasted Bell Pepper Risotto',
        price:'100',
        qty:'10',
        count:0,
        id:4,
        image: "https://source.unsplash.com/user/briansuman/80x80"
    },
    A5:{
        name:'Power Booster Chicken Salad',
        price:'100',
        qty:'10',
        count:0,
        id:5,
        image: "https://source.unsplash.com/user/briansuman/80x80"
    },
    A6:{
        name:'Peri Peri Chicken with Egg Corn Rice',
        price:'100',
        qty:'10',
        count:0,
        id:5,
        image: "https://source.unsplash.com/user/briansuman/80x80"
    },
}

//Stock.A1.name= firebase.database().ref('Stock/A1/name').once('value')
export class pageSimpl extends Component {

    constructor(props){
        super(props);
        this.renderItem = this.renderItem.bind(this);
        
        
        this.state = {
            phoneno:'',
            OTP:'',
            ts:'',
            key1:'',
            counter:0,
            dataSource: null
            
        //    hieghtIntro:200,
        //    heightSimpl:0,
        //    heightOTP:0,
        //    hieghtSuccess:0,
        };

        
    }

    getOTP() {

        var key = firebase.database().ref('/session').push().key
        
        firebase.database().ref('/session').child(key).set({Phone:userPhone,success:'true',timestamp:'19:05:25:02:35:45'})
        //if(userInfo.__phoneno===phoneno)
        //Alert.alert(`${phoneno}`)
    }
    onUnlock = () =>{
        
        var key = firebase.database().ref('/session').push().key
        firebase.database().ref('/machine').child(key).set({MID:machineID,mStatus:0})
         // Alert.alert('Function passed'+`${machineID}`+`${machineStatus}`)
         this.props.navigation.navigate('pageUnlock')
    }

    onAdd = (id) =>{
        this.setState({counter:this.state.counter+1})
    }

    onMinus = (id) =>{
        this.setState({counter:this.state.counter-1})
        
    }


    renderItem = ({item})=> {
        return (
         <View style={{flex:1}}> 
            <View  style={{ flex: 1, flexDirection: 'row',justifyContent:'space-between', marginBottom: 3}} > 

                <View  style={{ fLex: 1, justifyContent: 'center', marginLeft: 5 }} > 
                    <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: item.image }} /> 
                </View>

                <View  style={{ fLex: 3, width:150,justifyContent:'flex-start', marginLeft: 10, flexShrink: 1 }} > 
                    <Text  styLe={{  color: 'green', morginBottom: 15}} >{item.name} </Text> 
                    <Text  style={{  color: 'red' }} >Price: {item.price} </Text> 
                    <Text  style={{  color: 'red' }} >Qty:    {item.qty} </Text> 
                    <Text>Count: {this.state.counter} </Text>
                </View> 

                <View  style={{ fLex: 1, justifyContent: 'center', marginLeft: 5 }} > 
                        <TouchableOpacity style={{marginBottom:10}} >
                            <FontAwesome5.Button name="plus-circle" onPress={this.onAdd.bind(item._id)}/>
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <FontAwesome5.Button name="minus-circle" onPress={this.onMinus.bind(item._id)}/>
                        </TouchableOpacity>
                </View>
            </View> 
         </View>   
          )
      }
 
      componentDidMount() {
        //const url = "https://www.json-generator.com/api/json/get/ccLAsEcOSq?index=1";
        const url = "http://www.json-generator.com/api/json/get/bUXIgPWPjC?indent=2";
        //Below is for local json
        json = require('./stock.json');
        //json = Stock
        fetch(url).then((response)=>response.json())
                  .then((responseJson)=> {
                    this.setState({
                      //dataSource : responseJson.book_array
                      //dataSource : responseJson
                      
                      dataSource : json
                    })
                   })
                   .catch((error)=> {
                     console.log(error);
                   })      
   }
 


    render () {
        return(
            <View style={nbStyles.container}>                
                    <View style={nbStyles.unlockCard}>
                        <View style={nbStyles.cardContent}>
                            <View style={nbStyles.textContainer}>
                                
                                <Text style={[nbStyles.text,{fontSize: 20,fontWeight:'bold',marginTop:-20}]}>
                                   Please enter Phone no:
                                </Text>
                                <TextInput  style={{borderBottomWidth:0.5, marginBottom:15}}
                                            keyboardType='numeric' placeholder="Enter your number"
                                            pattern="[1-9]{1}[0-9]{9}"
                                            
                                            onChangeText={this.handleChange}/>
                                <Button title="SEND OTP" onPress={this.getOTP.bind()}/>
                                
                                
                                <Text style={[nbStyles.text,{fontSize: 20,fontWeight:'bold'}]}>
                                   Please enter OTP:
                                </Text>
                                <TextInput  style={{borderBottomWidth:0.5, marginBottom:15}}
                                            keyboardType='numeric' placeholder="Enter your number"
                                            pattern="[0-9]{4}" 
                                            
                                            onChangeText={(OTP) => this.setState({OTP})}/>
                                <Button title="UNLOCK" onPress={this.onUnlock.bind()}/>
                                
                            </View>
                            <View>
                                <View style={nbStyles.img}/>
                                    <Image  source={require('../../src/img/simplLogo.png')}/>
                                </View>
                            </View>
                    </View>


                    <View style={{borderWidth:1, 
                                    backgroundColor:"#fff", 
                                    borderColor:'gray',
                                    borderRadius:5,
                                    height:350,
                                    padding:10,
                                    marginTop:10}}>

                        <Text style={{fontSize:15, fontWeight:"bold"}}>STOCK</Text>
                            <FlatList 
                            data={this.state.dataSource}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            extraData={this.state}
                            />
                        
                    </View>

                        
            </View>

        )
    }


}

const nbStyles = StyleSheet.create({

    container:{
        flex:1,
        padding:10,
        justifyContent:'center'
    },
    stockContent:{
        flexDirection:'row', 
        justifyContent:'space-between',
        //alignSelf:'center',
        marginTop:5
    },
    stockText1:{
        flex:2,
        alignItems:'flex-end'
    },
    stockText:{
        flex:1,
        alignItems:'flex-end'
    },

    unlockCard:{
        height:350,
        borderRadius:20,
        borderWidth:0.5,
        borderColor: 'gray',
        backgroundColor:'white',
        shadowOffset:{  width: 10,  height: 10  },
        shadowColor: 'black',
        shadowOpacity: 3.0,

    },
    cardContent:{
        flex:1,
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textContainter:{
        alignItems:'center',
        padding:20
    },
    text:{
        fontSize:15,
        alignSelf:'center',
        marginBottom: 5,
        marginTop:30
        //borderBottomWidth:1,

    },
  /*  img:{
        width:500,
        height:500,
        position:'absolute',
        borderRadius:250,
        backgroundColor:'white',
        left:-50,
        bottom:-150
        
    },
    */
    stock:{
       // flex:1,
        height:100
    }

}
)