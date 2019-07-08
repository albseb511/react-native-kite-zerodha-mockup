import React, {Component} from 'react'

import { Alert, 
        Button,
        StyleSheet, 
        View, 
        Text , 
        TextInput, 
        Image,
        TouchableOpacity} from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {createStackNavigator, createAppContainer} from 'react-navigation'

//FIREBASE
import * as firebase from 'firebase'
import {firebaseConfig} from './config'

var A1= "Chicken Sandwich"
var A2= "Idly Vada"
var A3= "Paneer Rice"
var A4= "Dal Rice"
//A1=firebase.database().ref('Stock/A1/').once('value')

export class pageUnlock extends Component {
    constructor(props){
        super(props);
        this.state = {
            hieghtIntro:200,
            heightSimpl:0,
            heightOTP:0,
            hieghtSuccess:0,
        };
    }



    render () {
        return(
            <View style={nbStyles.container}>
                <TouchableOpacity>
                    <View style={nbStyles.unlockCard}>
                        <View style={nbStyles.cardContent}>
                            <View style={nbStyles.textContainer}>
                                <Text style={[nbStyles.text,{fontSize: 20,fontWeight:'bold',alignSelf:'center'}]}>
                                   Thank you for using Nombot
                                </Text>
                                <Text style={nbStyles.text}>
                                   Please see your summary of the bill
                                </Text>
                                <Text style={nbStyles.text}>
                                   Please close the door once items are taken.
                                </Text>
                            </View>

                            <View>
                            <View style={nbStyles.img}/>
                            <Image  source={require('../../src/img/simplLogo.png')}/>
                            </View>
                        </View>
                    </View>


                    <View style={[nbStyles.unlockCard,{borderWidth:0}]}>
                        <View style={nbStyles.cardContent}>
                            <View style={nbStyles.textContainer}>
                                <Text style={[nbStyles.text,{fontSize: 20,fontWeight:'bold'}]}>
                                   Total: Rs. 240
                                </Text>
                                <Text style={[nbStyles.text]}>
                                   1. {A1} x 1: Rs. 120
                                </Text>
                                <Text style={nbStyles.text}>
                                   2. {A2} x 2: Rs. 60
                                </Text>
                                
                            </View>

                            <View>
                            <View style={nbStyles.img}/>
                            
                            </View>
                        </View>
                    </View>

                    <View style={{width:100,alignSelf:'center'}}>
                        <Button color="green" title="CLOSE"
                                onPress={()=> this.props.navigation.navigate('homeNB')  } />
                    </View>
                </TouchableOpacity>

                
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

    unlockCard:{
        height:250,
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
        alignSelf:'flex-start',
        marginBottom: 5

    },
  /*  img:{
        width:500,
        height:500,
        position:'absolute',
        borderRadius:250,
        backgroundColor:'white',
        left:-50,
        bottom:-150
        
    }
    */

}
)