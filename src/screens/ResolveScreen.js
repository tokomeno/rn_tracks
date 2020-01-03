import React, { useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { Context as AuthContext } from "../contexts/AuthContext";

const ResolveScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};

export default ResolveScreen;
