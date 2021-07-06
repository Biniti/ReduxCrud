import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import { ButtonGeneral } from "../../components/ButtonGeneral";
import { Input } from "../../components/Input";
import { colors } from "../../global/styles";

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: "LOADING" });
    setTimeout(() => {
      dispatch({ type: "LOGIN" });
      dispatch({ type: "LOADING" });
    }, 3000);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FaceUsers</Text>
      <View style={styles.inputContainer}>
        <Input placeholder="username" />
        <Input placeholder="password" />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonGeneral text="Log in" handlePress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  inputContainer: {
    margin: 10,
    justifyContent: "space-around",
    height: 90,
    marginBottom: 50,
  },
  text: {
    marginBottom: 80,
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "flex-start",
    color: "white",
  },
  buttonContainer: {
    alignSelf: "center",
    backgroundColor: "#734DA1",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#8659B7",
  },
});
