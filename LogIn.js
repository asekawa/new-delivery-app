import React from "react";
import { Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Button} from "react-native";

export  class Login extends React.Component {
static navigationOption={
    header:null
}
    state={

        
        userName:'',
        password:'',

    }
    render() {
      return (
        <View style={styles.container}>
        
        <Text style={{color:"blue", fontSize:20 }}>restuarant managemnet system {"\n"}</Text>
        
        <Text style={{ fontSize:15}}> user name {"\n"}</Text>
        <TextInput 
        style={{width:300,borderColor:"black",borderEndWidth:1}}
        

        value={this.state.userName} onChangeText={(text)=>this.setState({userName:text})}/> 
        
        <Text style={{ fontSize:15}}>Password</Text>
        
        <TextInput 
        style={{width:300,borderColor:"black",borderEndWidth:1}}
        onChangeText={(text)=>this.setState({password:text})}

        value={this.state.password} /> 
       
        <Button title="Log in" onPress={()=>this.props.navigation.navigate('DisplayOrders')}/> 
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
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
  