import * as Locatoin from "expo-location";

const tenMetersWithDegress = 0.0001;
const getLocation = increment => {
  return {
    timestamp: 1000000,
    speed: 0,
    heading: 0,
    accuracy: 5,
    altitudeAccuracy: 5,
    altitude: 5,
    longitude: -122.0312186 + increment * tenMetersWithDegress,
    latitude: 37.33233141 + increment * tenMetersWithDegress
  };
};

let counter = 0;

setInterval(() => {
  Locatoin.EventEmitter.emit("Expo.locationChanged", {
    watchId: Locatoin._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
