import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../contexts/LocationContext";
const styles = StyleSheet.create({
  map: {
    height: "100%"
  }
});
const Map = () => {
  const {
    state: { currentLocation }
  } = useContext(LocationContext);
  console.log(currentLocation);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  // const points = [];
  // for (let i = 0; i < 21; i++) {
  //   if (i % 2 === 0) {
  //     points.push({
  //       latitude: 37.33233 + i * 0.001,
  //       longitude: -122.03121 + i * 0.001
  //     });
  //   } else {
  //     points.push({
  //       latitude: 37.33233 - i * 0.002,
  //       longitude: -122.03121 + i * 0.001
  //     });
  //   }
  // }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        // latitude: 37.33233,
        // longitude: -122.03121,
        ...currentLocation.coords,
        latitudeDelta: 0.09,
        longitudeDelta: 0.09
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.09,
        longitudeDelta: 0.09
      }}
    >
      {/* <Polyline coordinates={points} strokeWidth={3} /> */}
    </MapView>
  );
};
//

export default Map;
