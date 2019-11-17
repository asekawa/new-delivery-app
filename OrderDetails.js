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
     header: null,
    headerRight: () => (
      <Button
       onPress={() => this.props.navigation.navigate("Home")} 
       title="logot"
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
        </View>
       
        
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

         <View style={{display: "flex",justifyContent: "center"}}>
         <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('MapView')}>
          <Text style={styles.txt}>Show Location</Text>
        </TouchableOpacity>
         </View>
         
         <View style={{display: "flex",marginTop: 15,justifyContent: "center"}}>
         <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('DisplayOrders')}>
          <Text style={styles.txt}>Accept</Text>
        </TouchableOpacity>
         </View>

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
    marginLeft: 10,
    marginRight: 5,
    backgroundColor: '#F5FCFF',
  },
  tab: {
    backgroundColor: '#123894',
    width: '100%',
    height: 50,
    marginTop: 100,
  },
  button: {
    margin: 6,
    width: '95%',
    height: 40,
    backgroundColor: '#407CBF',
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
