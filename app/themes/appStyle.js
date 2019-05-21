import {StyleSheet} from 'react-native'

export const appStyle = StyleSheet.create({
     container: {
         flex: 1,
         flexDirection: 'column',
         alignItems: 'center',
     
      },
  
  })
  

export const cards = StyleSheet.create({
    companyCard: {
      height: 75,
      flexDirection: 'row',
      borderBottomWidth: 0.3,
      borderColor: 'gray',
      

    },
      companyOptions:{
        height: 0,
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderColor: 'gray',
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
  


export const navBar = StyleSheet.create({
    topBar:{
      height: 56,
      flexDirection: 'row'
    },
    icon: {
      flex:1,
      
    },
    leftIcon:{
      flex:3,
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
  
  });