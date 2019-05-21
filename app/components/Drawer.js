import React, {Component } from 'react';

import { Alert, 
        StyleSheet, 
        View, 
        Text , 
        TextInput, 
        Image,
        Linking,
        TouchableOpacity,
        SafeAreaView,
        ScrollView,
        Button} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {DrawerItems} from 'react-navigation'
    

// CUSTOM DRAWER START
export const KiteDrawer = (props) => (
    <SafeAreaView style={{flex:1}}>
      <View style={{height:150, backgroundColor:"#e74c3c",padding:10,justifyContent:'space-evenly'}}>
      <Image source={require('../src/img/zerodha.png')} 
              style={{alignSelf:'flex-end', height:20, resizeMode:'contain'}}/>
        <Image source={require('../src/img/ic_loading.png')} 
               style={{width:30,
                      height:30,
                      borderRadius:15, 
                      backgroundColor:"white",
                      marginBottom:10}}/>
        <Text style={{color:"white",marginBottom:10}}>Albert Sebastian</Text>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={{color:"white", fontSize:12}}>$ClientID</Text>
          <Text style={{color:"white", fontSize:12}}>$version</Text>
        </View>
      </View>
      <View style={{height:100, backgroundColor:"#fff",padding:10,alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
                <View>
                  <View style={{width:5, height:75,backgroundColor:"green", position:'absolute', left:-15, top:-7.5}}/>
                  <View style={{alignContent:'center'}}>
                    <Text style={{color:"black"}}>NIFTY 50</Text>
                    <Text style={{fontSize:12}}>11257.10</Text>
                    <Text style={{fontSize:12}}>100.1 (0.90%)</Text>
                  </View>
                </View>
  
                <View>
                  <View style={{width:5, height:75,backgroundColor:"green", position:'absolute', left:-15, top:-7.5}}/>
                  <View style={{alignContent:'center'}}>
                    <Text style={{color:"black"}}>SENSEX</Text>
                    <Text style={{fontSize:12}}>37393.48</Text>
                    <Text style={{fontSize:12}}>278.6.1 (0.75%)</Text>
                  </View>
                </View>
                
      </View>
      <ScrollView>
          <DrawerItems {...props} />
          <View>
            <Text style={{padding:20,borderTopWidth:0.5, paddingBottom:5}}>ACCOUNT</Text>
  
            <TouchableOpacity style={{flexDirection:'row', padding:20, paddingBottom:5}}>
              <FontAwesome5 name={'money-bill-wave'}  size={15} />
              <Text style={{paddingLeft:25}}>Funds</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={{flexDirection:'row', padding:20, paddingBottom:5}}
            onPress={ ()=>{ Linking.openURL('https://kite.trade/docs/kite/#kite-android')}}>
              <FontAwesome5 name={'life-ring'}  size={15} />
              <Text style={{paddingLeft:25}}>User manual</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={{flexDirection:'row', padding:20, paddingBottom:5}}
            onPress={()=>{}}>
              <FontAwesome5 name={'power-off'}  size={15} />
              <Text style={{paddingLeft:25}}>Logout</Text>
            </TouchableOpacity>
  
  
          </View>
      </ScrollView>
  
    </SafeAreaView>
  )
  
  // CUSTOM DRAWER END
  