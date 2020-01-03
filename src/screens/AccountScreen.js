import React, { useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView as ABC } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../contexts/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 48, textAlign: "center" }}>AcountScreen</Text>
        <Spacer>
          <Button title="sing out" onPress={signout}></Button>
        </Spacer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // // alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "column",
    // marginBottom: 30,
    // borderWidth: 1,
    // borderColor: "red"
  }
});

export default AccountScreen;
