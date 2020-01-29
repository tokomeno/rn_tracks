import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { createBottomTabNavigator } from "react-navigation-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

import { Provider as AuthProvider } from "./src/contexts/AuthContext";
import { Provider as LoactionProvider } from "./src/contexts/LocationContext";

import { setNavigator } from "./src/navigatorRef";
import ResolveScreen from "./src/screens/ResolveScreen";
console.log("reset app------------------");
const switchNavigator = createSwitchNavigator({
  ResolveScreen: ResolveScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    })
  })
});

const Navigator = createAppContainer(switchNavigator);

const App = () => {
  return (
    <LoactionProvider>
      <AuthProvider>
        <Navigator
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </LoactionProvider>
  );
};

export default App;
