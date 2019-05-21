import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import {cards} from '../themes/Cards'

export default class CardCompany extends Component {

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

    render(){
    return (
    <View>
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
    </View>
    )
}
}




