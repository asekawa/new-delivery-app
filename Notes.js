import React from "react";
import { Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Button} from "react-native";
import { red } from "ansi-colors";

export  class Notes extends React.Component {
    static navigationOption={
      header:null
  }
    render() {

      return (


        <View style={styles1.container}>
         <Text>Add Notes</Text>

          
        </View>
      );
    }
  }

  const styles1 = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding:0,
    },
    txt:{
        marginLeft:'6%'
    }
    ,
    sec:{
        elevation:10,
        backgroundColor:"#faf0e6",
        width:'95%',
        borderColor:'#dddddd',
        borderStyle:'solid',
        height:100,
        padding:'1%',
        margin:'2%',
    },
    heading:{
            fontSize:26,
            color:'#121212',
            marginTop:0,


    },
    img:{
        width:'20%',
        height:'100%',
        backgroundColor:'#aaaaaa'
    },

    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },

  });
  