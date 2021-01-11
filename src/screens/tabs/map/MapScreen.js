import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions,TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: height,
        width: width,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },

});
class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinate: null,
      marginBottom: 1
    };
  }

  _renderMap(){
    return(
      <MapView
      ref={r=>this.map=r}
      onMapReady={() => {
          this.setState({ marginBottom: 0 })
      }}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={[styles.map, { marginBottom: this.state.marginBottom }]}
      region={{
          latitude: 34.653674208666,
          longitude: 50.90534582734108,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
      }}
      showsMyLocationButton={true}
      showsUserLocation={true}
  >
      <Marker
          onPress={(e) => {
              console.log(e.nativeEvent)
              this.setState({ coordinate: e.nativeEvent.coordinate })
          }}
          draggable
          coordinate={{ latitude: 34.653674208666, longitude: 50.90534582734108 }}
      //title={marker.title}
      // description={marker.description}
      >
          <Callout>
              <Text>{this.state.coordinate!==null? `lat : ${this.state.coordinate.latitude} , long : ${this.state.coordinate.longitude}`:'this is marker'}</Text>
          </Callout>
      </Marker>

  </MapView>

    )
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this._renderMap()
        }
      </View>
    );
  }
}

export default MapScreen;
