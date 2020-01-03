import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../contexts/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        onSubmit={signup}
        submitButtonText={"Sign Up"}
        headerText={"Sign up Tracker"}
        errorMessage={state.errorMessage}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead"
      ></NavLink>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    // borderColor: "red",
    // borderWidth: 4,
    flex: 1,
    justifyContent: "center",
    marginBottom: 140
  }
});

export default SignupScreen;
