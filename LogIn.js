import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  BackHandler,
  Image,
  ScrollView,
} from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import driver from './Images/d1.jpg'

export class Login extends React.Component {
  static navigationOption = {
    header: null,
  };

  state = {
    email: '',
    password: '',
    isSubmitting: false,
    error: ""
  };

  //This function set user token sent by the server in async storage. Async Storage is
  // similar to local storage in web apps. After setting, user is directed to "Orders" page.
  //(for definitions of the screens, see App.js)
  setToken = async token => {
    await AsyncStorage.setItem("token", token).then(async val => {
      const token = await AsyncStorage.getItem('token')
      this.props.navigation.navigate('Orders');
    });
  };

  //This is the first page that users see after login. To prevent logged in users from
  //going back to login screen, the back button of the device has been disabled only for this
  //screen.
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  //This function is called when "Login" button is pressed.There is a route '/authenticate'
  //in the backend which handles login using email and password. Axios library provides a
  //way to specify base url (in this case "http://192.168.1.100:300/api") in App.js. Then
  //all subsequent request urls in the app are appended to this base url and sent to the server.
  login = () => {
    this.setState({ isSubmitting: true,error: "" })
    axios.post('/authenticate', {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      if (res.data.token) {
        this.setState({isSubmitting: false})
        this.setToken(res.data.token);

        //navigation part

      }
      else if (err) {
        this.setState({isSubmitting: false})
      }
    })
      .catch(err => { 
        console.log(err) 
        this.setState({isSubmitting: false,error: "Invalid creentials"})
      })

  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>

        <View style={{ display: "flex", justifyContent: "center" }}>
          <Text style={{ color: '#407CBF', fontSize: 45 }}>
            FOOD HUB {'\n'}
          </Text>
        </View>

        <Image source={driver} style={{ width: 160, height: 130, borderRadius: 45 }}></Image>

    <Text style={{color: "red",textAlign: "center"}}>{this.state.error}</Text>

        <View style={{ display: "flex" }}></View>
        <View style={styles.username}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Email</Text>

          <TextInput
            style={{ width: 300, borderColor: 'black', borderWidth: 1, borderStyle: 'solid', marginBottom: 15 }}
            value={this.state.username}
            onChangeText={text => this.setState({ email: text })}
          />
        </View>

        <View style={styles.password}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Password</Text>

          <TextInput
            style={{ width: 300, borderColor: 'black', borderWidth: 1, borderStyle: 'solid', marginBottom: 15 }}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry={true}
            value={this.state.password}
          />
        </View>



        <View style={[{ borderRadius: 22, marginTop: 10, width: "80%", overflow: 'hidden' }]}>
          <Button
            title="Log in"
            color="#407CBF"
            disabled={this.state.isSubmitting}
            onPress={this.login}

          />
        </View>
      </ ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  username: {
    display: "flex",
    flexDirection: "column",
  },
  password: {
    display: "flex",
    flexDirection: "column"
  },
  imageConteiner: {
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'relative'
  },
});
