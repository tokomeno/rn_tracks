import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({ errorMessage, headerText, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h4>{headerText}</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </Spacer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
        label="Email"
      />
      <Spacer />
      <Input
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
        label="Password"
      />
      <Spacer />
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => {
            onSubmit({ email, password });
          }}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: "red",
    // borderWidth: 4,
    flex: 1,
    justifyContent: "center",
    marginBottom: 140
  },
  link: {
    color: "blue",
    textAlign: "center"
  },
  errorMessage: {
    color: "red",
    margin: 5
  }
});

export default AuthForm;
