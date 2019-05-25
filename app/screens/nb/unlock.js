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
                                   UNLOCK PAGE
                                </Text>
                                <Text style={nbStyles.text}>
                                   Press the Button to Unlock
                                </Text>
                                <Text style={nbStyles.text}>
                                   Payment Gateway: Simpl
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
                                   1. Chicken Sandwich x 1: Rs. 120
                                </Text>
                                <Text style={nbStyles.text}>
                                   2. Idly Vada x 2: Rs. 60
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