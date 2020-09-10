import React from 'react';
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function MapViewScreen(props) {
    const initialRegion = {
        latitude: 13.084235,
        longitude: 80.198498,
        latitudeDelta: 0.25,
        longitudeDelta: 0.15
      };
    return (
      <View style={styles.container}>
        <MapView initialRegion={initialRegion} style={styles.mapStyle} />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});