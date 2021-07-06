import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { colors } from "../../global/styles";
import { Input } from "../../components/Input";
import { ButtonGeneral } from "../../components/ButtonGeneral";

export default function Create({ navigation, route }) {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const selector = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (route.params !== undefined) setUser(route.params.user);
    if (selector.edit.isEditPage) {
      setName(route.params.user.name);
    }
  }, []);
  const handleRegisterUser = () => {
    dispatch({ type: "LOADING" });
    const math = Math.random() * (100 - 1) + 1;
    try {
      setTimeout(() => {
        dispatch({ type: "POST_USERS", id: math.toString(), name: name });
        dispatch({ type: "LOADING" });
        Alert.alert("User registered successfully");
      }, 2000);
    } catch (e) {
      Alert.alert("ERROR " + e);
      dispatch({ type: "LOADING" });
    } finally {
      setName("");
    }
  };

  const handleEditUser = () => {
    dispatch({ type: "EDIT_PAGE" });
    dispatch({ type: "LOADING" });
    try {
      setTimeout(() => {
        dispatch({ type: "POST_USERS", id: user.id, name: name });
        dispatch({ type: "EDIT_USER", confirm: true, id: user.id });
        dispatch({ type: "LOADING" });
        navigation.navigate("Home");
        Alert.alert("User was edit sucessfully");
      }, 1000);
    } catch (e) {
      Alert.alert("ERRO" + e);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          valueName={name}
          placeholder={selector.edit.isEditPage ? "" : "username"}
          textChanged={setName}
        />
      </View>

      <View style={styles.buttonContainer}>
        {selector.edit.isEditPage ? (
          <TouchableOpacity onPress={handleEditUser}>
            <Text style={styles.buttonText}>Edit User</Text>
          </TouchableOpacity>
        ) : (
          <ButtonGeneral
            text="Register user"
            handlePress={handleRegisterUser}
          />
        )}
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
    margin: 20,
  },
  buttonContainer: {
    alignSelf: "center",
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: "#9876CC",
    borderColor: "#8659B7",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
