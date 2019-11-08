import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

export class OrderDetails extends React.Component {
  static navigationOption = {
     title:OrderDetails,
    headerRight: () => (
      <Button
       // onPress={() => alert('This is a button!')}
         style={{textAlign: "center", marginTop: 80}} onPress={() => this.props.navigation.navigate("Home")} title="logot"
       // title="logout"
       // color="#fff"
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {sampleText: 'Accept'};
    this.state = {buttonDisable: false};
  }
  AcceptedButton = () => {
    this.setState({sampleText: 'Accepted'});

    //buttonDisable:!this.state.buttonDisable,
  };

  render() {
    return (
      
      
      <View style={styles.container}>
        <View>
          
        <Button style={{textAlign: "center", marginTop: 80}} onPress={() => this.props.navigation.navigate("Home")} title="logout"/>
        </View>
        <Text style={styles.text,styles.margin} >
          Order details {'\n'}
        </Text>

        <Text style={styles.text, styles.margin}>
          Order details {'\n'}
        </Text>
        
        <Text  style={styles.text}>
          Order Number:{'\n'}
        </Text>
        <Text style={styles.text}>
          customer name{'\n'}
        </Text>
        <Text style={styles.text}>
          Items:{'\n'}
        </Text>
        <Text style={styles.text}>
          location{'\n'}
        </Text>

        
        
       <View  style={[{borderRadius:22 , marginTop:10, width:"50%" ,overflow: 'hidden'}]}>
        <Button
          title="Log in"
          color="#407CBF"
         onPress={() => this.props.navigation.navigate("MapView")} title="Show Location"/>
         </View>
         
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('DisplayOrders')}>
          <Text style={styles.txt}>Accept</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab} onPress={()=>this.props.navigation.navigate('Notes')}>
          <Text style={styles.txt}>Add Notes</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tab: {
    backgroundColor: '#123894',
    width: '100%',
    height: 50,
    marginTop: 210,
  },
  button: {
    margin: 6,
    width: '30%',
    height: 40,
    backgroundColor: '#407CBF',
    textAlign: 'center',
    elevation: 3,
    overflow: 'hidden',
    borderRadius:22 
  },
  txt: {
    color: '#ffffff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    textAlign: 'center',
    marginTop: 10,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },

  text:{
    color: '#000000',
     fontSize: 20, 
     textAlign: 'left',
     marginBottom:10,
     fontWeight: 'bold'

  },
  margin:{
    marginBottom:50

  }
});
