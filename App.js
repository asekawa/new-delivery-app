import React from "react";
import { Button,View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {Login} from "./LogIn"
import {Orders} from "./Orders"
import ShowLocation from './ShowLocation'
import {OrderDetails} from "./OrderDetails"

/* class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>user na</Text>
        <Button
          title="submit"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
 */
/* class DetailsScreen extends React.Component {
  static navigationOption={
    header:null
}
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
 */

const AppNavigator = createStackNavigator(
  {
    Home: Login,
    DisplayOrders: Orders,
    OrderDetails:OrderDetails,
    ShowLocation: ShowLocation
  },
  {
    initialRouteName: "Home"
  }
);

//export default createAppContainer(AppNavigator);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}