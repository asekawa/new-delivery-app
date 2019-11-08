import React from "react";
import { Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Button} from "react-native";
import { red } from "ansi-colors";

export class Orders extends React.Component {
    static navigationOption={
      header:null
  }
    render() {

      return (


        <View style={styles1.container}>
         

          <Text style={{color:'#407CBF', fontSize: 30, textAlign: 'center'}}> Orders  {"\n"} </Text> 
          
        {[1,2,3].map( item => {
          return (
            <View style={styles1.sec} key={item}> 
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('OrderDetails')}
            >
                <View style={{flexDirection:'row', padding:'0.5%' ,height:'100%',width:'100%'}}>
                    <View style={styles1.img}></View>
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles1.txt}>Order Number </Text>
                        </View> 
                        
                        <View>
                        <Text style={styles1.txt}>customer name </Text>
                    
                        </View>
                        <Text style={styles1.txt}>menu item</Text>
                        
                    </View>
    
                </View>
    
            </TouchableOpacity>
    
            </View>
          )
        })}
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
  