import {StyleSheet} from 'react-native'

export const login = StyleSheet.create({
    container: {
     flex: 1,
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center'
    },
    loginBox: {
      justifyContent: 'center',
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
    logoLoading:{
      marginTop: 0,
      marginBottom:0,
      width: 75,
      height: 75,
      resizeMode: "contain"
    },
     inputText: {
       height: 40, 
       width: 300, 
       borderColor: 'gray', 
       borderBottomWidth: 0.5,
       marginBottom: 10
       
      },
      forgotpass:
      {
        marginTop: 10,
        fontSize: 12
      },
      header:
      {
        color: 'gray'
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
      pinPageText:
      {
        flexDirection: 'row'
      }
  });