import React, { Component } from 'react';
import { View,Text, ActivityIndicator } from 'react-native' 
import AsyncStorage from "@react-native-community/async-storage"

class CheckAuth extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
      }
    
     _bootstrapAsync = async () => {
         //This screen has been set as the initialroute. it checks whether there is a token
         //in async storage. 
        const userToken = await AsyncStorage.getItem('token');
        if(userToken){
            //If available, user is directed to Orders screen
            this.props.navigation.navigate('Orders');
        }
        else{
            //otherwise user is directed to login screen.
            await AsyncStorage.removeItem('token')
            this.props.navigation.navigate('Home');
        }
      };
    
    render() {
        return (
            //A spinner which indicates loading will be displayed 
            //to the user until above check is completed
            <View style={{display: "flex",alignItems: "center",height: "100%",justifyContent: "center"}}>
                 <ActivityIndicator size="large" color="#0000ff" />
                 <Text style={{fontSize: 20}}>Loading..</Text>
            </View>
        );
    }
}

export default CheckAuth;