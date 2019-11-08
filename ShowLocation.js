import React, {useState, useEffect} from 'react';
import {TextInput, StyleSheet, Button, View, Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import Axios from 'axios';

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 60,
  },
});

export default function ShowLocation(){
  const [query, setQuery] = useState('');
  const [currentLoc, setCurrentLoc] = useState({});
  const [destinationLoc, setDestinationLoc] = useState({});

  function search() {
    Axios.get(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${query}&inputtype=textquery&fields=name,geometry&key=AIzaSyCTmkdsoNiLI4Ia5GnnAhfL9-6zJgCuCk4`,
    ).then(res => {
      console.log(res.data.candidates[0].geometry.location);
      const destCords = {
        latitude: res.data.candidates[0].geometry.location.lat,
        longitude: res.data.candidates[0].geometry.location.lng,
      };
      setDestinationLoc(destCords);
    });
  }

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      const startCords = {
        latitude: parseFloat(info.coords && info.coords.latitude).toFixed(6),
        longitude: parseFloat(info.coords && info.coords.longitude).toFixed(6),
      };
      Alert.alert(startCords.latitude ? startCords.latitude.toString() : "")
      setCurrentLoc(startCords);
      setDestinationLoc(startCords)
    });
  }, []);

  return (
    <>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <TextInput
          style={{
            height: 40,
            width: '40%',
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={text => setQuery(text)}
          value={query}
        />
        <Button style={{width: '20%'}} title="Search" onPress={search} />
      </View>
      <TextInput />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 7.8731,
          longitude: 80.7718,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
        {currentLoc && destinationLoc ? (
          <>
            {/* <MapView.Marker coordinate={currentLoc} />
            <MapView.Marker coordinate={destinationLoc} /> */}
            <MapViewDirections
              origin={currentLoc}
              destination={destinationLoc}
              // apikey="AIzaSyCTmkdsoNiLI4Ia5GnnAhfL9-6zJgCuCk4"
              apikey="AIzaSyCTmkdsoNiLI4Ia5GnnAhfL9-6zJgCuCk4"
              strokeWidth={4}
              strokeColor="hotpink"
            />
          </>
        ) : (
          <></>
        )}
      </MapView>
      <View  style={[{ marginTop:10, width:"100%"  ,position: 'absolute',bottom:0 ,marginBottom:10}]}>
        <Button
          title="order completed"
          color="#407CBF"
          marginTop= '20'
          
         // onPress={this.login}
        
        />
      </View>
         
    </>
    
  );
};

ShowLocation.navigationOptions = ({navigation}) => {
  return {
    title: "Confirm Order",
    headerRight: (
      <Button
      style={{textAlign: "center", marginTop: 80}} onPress={() => navigation.navigate("Home")} title="logout" color="#407CBF"/>
    ),
  };
};
