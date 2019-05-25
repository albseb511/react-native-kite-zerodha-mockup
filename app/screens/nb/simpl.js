import React, {Component} from 'react'

import { Alert, 
        StyleSheet, 
        View, 
        Text , 
        TextInput, 
        Image,
        TouchableOpacity,
        Button} from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {createStackNavigator, createAppContainer} from 'react-navigation'

const userInfo = {phoneno:'9901582145',OTP:'1234'}

export class pageSimpl extends Component {
    constructor(props){
        super(props);
        this.state = {
            phoneno:'',
            OTP:'',
        //    hieghtIntro:200,
        //    heightSimpl:0,
        //    heightOTP:0,
        //    hieghtSuccess:0,
        };
    }

    getOTP() {
        //const phoneno = this.state.phoneno
        //const OTP = this.state.OTP
        //if(userInfo.__phoneno===phoneno)
        Alert.alert(userInfo.phoneno)
    }
    onUnlock(){
       
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
                                <TextInput  style={{borderWidth:0.5, marginBottom:5}}
                                            keyboardType='numeric' placeholder="Enter your number"
                                            pattern="[1-9]{1}[0-9]{9}"
                                            value={this.state.phoneno}
                                            onChangeText={(phoneno) => this.setState({phoneno})}/>
                                <Button title="SEND OTP" onPress={this.getOTP.bind()}/>
                                
                                
                                <Text style={[nbStyles.text,{fontSize: 20,fontWeight:'bold'}]}>
                                   Please enter OTP:
                                </Text>
                                <TextInput  style={{borderWidth:0.5, marginBottom:5}}
                                            keyboardType='numeric' placeholder="Enter your number"
                                            pattern="[0-9]{4}" 
                                            value={this.state.OTP}
                                            onChangeText={(OTP) => this.setState({OTP})}/>
                                <Button title="UNLOCK" onPress={()=> this.props.navigation.navigate('pageUnlock')}/>
                                
                            </View>
                            <View>
                            <View style={nbStyles.img}/>
                            <Image  source={require('../../src/img/simplLogo.png')}/>
                            </View>
                        </View>
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
        
    }
    */

}
)