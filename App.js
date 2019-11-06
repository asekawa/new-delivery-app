import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {Login} from "./LogIn"
import {Orders} from "./Orders"
import CheckAuth from './CheckAuth'
import {OrderDetails} from "./OrderDetails"
import MapView from "./ShowLocation"
import axios from 'axios';
import {
  
  Button,
  
} from 'react-native';

//defining base url here enables you to write network requests to the server
//without having to write full url all the time. Instead you should only use the rest
//of the path(relative path)
//Eg: /authenticate instead of http://192.168.1.100:3000/api/authenticate
//The following IP address differs from each other. make sure to check your machine's
//IP address and replace this with it( IP only. Keep the port number as it is).
axios.defaults.baseURL = "http://10.10.5.123:3000/api/"

const AppNavigator = createStackNavigator(
  {
    Home:  {
      screen: Login,
      navigationOptions:  {
        title: '',
        
    }
    
    },
    Orders: {
      screen: Orders,
      navigationOptions: ({ navigation }) => ({
        title: 'Orders',
        headerLeft: () => (
          <Button
           style={{textAlign: "center", marginTop: 80}} onPress={() => navigation.navigate("Home")} title="logout"/>

           // onPress={() => alert('This is a button!')}
           // title="logout"
            //color="#e34566"
          
        ),
      })
    },
    OrderDetails: {
      screen: OrderDetails,
      navigationOptions: ({ navigation }) => ({
        title: 'Order Details',
        headerLeft: () => (
          <Button
           style={{textAlign: "center", marginTop: 80}} onPress={() => navigation.navigate("Home")} title="logout"/>
        ),
      }) 
    },
    CheckAuth: CheckAuth,
    MapView: MapView,
  },

  {
    initialRouteName: "CheckAuth"
  }
);

  

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}