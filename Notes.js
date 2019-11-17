import React from "react";
import { Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Button} from "react-native";
import { red } from "ansi-colors";

export  class Notes extends React.Component {
    static navigationOption={
      header:null
  }

  state={
    content: ""
  }
    render() {

      return (


        <View>
         <Text style={{fontSize: 20,fontWeight: "bold"}}>Add Notes</Text>
         <TextInput
          placeholder="Compose note here.."
          textAlignVertical="top"
          numberOfLines={10}
          blurOnSubmit={true}
          onChangeText={text => this.setState({content: text})}
         >

         </TextInput>

          
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
  