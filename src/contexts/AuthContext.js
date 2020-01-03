import React from "react";
import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackeApi from "../api/tracker";
import { navigate } from "../navigatorRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { ...state, errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  trackeApi
    .post("/signup", { email, password })
    .then(async res => {
      console.log(res.data);
      await AsyncStorage.setItem("token", res.data.token);
      dispatch({ type: "signin", payload: res.data.token });
      navigate("TrackList");
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up"
      });
    });
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: "clear_error_message" });
};

const signin = dispatch => ({ email, password }) => {
  trackeApi
    .post("/signin", { email, password })
    .then(async res => {
      console.log(res.data);
      await AsyncStorage.setItem("token", res.data.token);
      dispatch({ type: "signin", payload: res.data.token });
      navigate("TrackList");
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in"
      });
    });
};

const signout = dispatch => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage },
  {
    isSignId: false,
    errorMessage: "",
    token: null
  }
);
