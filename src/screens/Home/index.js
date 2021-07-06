import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { colors } from "../../global/styles";
import { ButtonGeneral } from "../../components/ButtonGeneral";
import { ButtonIcon } from "../../components/ButtonIcon";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const selector = useSelector(({ data }) => {
    return data.users;
  });
  const handleDeleteAll = () => {
    dispatch({ type: "LOADING" });
    try {
      setTimeout(() => {
        dispatch({ type: "CLEAR_USERS_DATA" });
        dispatch({ type: "LOADING" });
        Alert.alert("List was cleared successfully");
      }, 1000);
    } catch (e) {
      Alert.alert("ERROR " + e);
      dispatch({ type: "LOADING" });
    }
  };
  const handleDelete = (user) => {
    dispatch({ type: "LOADING" });
    try {
      setTimeout(() => {
        dispatch({ type: "DELETE_USER", id: user.id });
        dispatch({ type: "LOADING" });
        Alert.alert("User was removed successfully");
      }, 1000);
    } catch (e) {
      Alert.alert("ERROR " + e);
      dispatch({ type: "LOADING" });
    }
  };
  const handleEdit = (user) => {
    dispatch({ type: "EDIT_PAGE" });
    dispatch({ type: "EDIT_USER", id: user.id });
    navigation.navigate("Create", { user: user });
  };
  return (
    <View style={styles.container}>
      <View style={styles.createButtonContainer}>
        <ButtonIcon
          buttonName="pluscircleo"
          buttonColor={colors.whiteColor}
          handlePress={() => {
            navigation.navigate("Create");
            dispatch({ type: "EDIT_PAGE_FALSE" });
          }}
        />
      </View>
      <Text style={styles.title}>Users List</Text>
      <View style={styles.userContainer}>
        <ScrollView>
          {selector.map((user) => {
            return (
              <View key={user.id} style={styles.textContainer}>
                <Text style={styles.listText}>{user.name}</Text>
                <ButtonIcon
                  buttonName="edit"
                  buttonColor={colors.editColor}
                  handlePress={() => {
                    handleEdit(user);
                  }}
                />
                <ButtonIcon
                  buttonName="delete"
                  buttonColor={colors.deleteColor}
                  handlePress={() => {
                    handleDelete(user);
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.deleteAllContainer}>
        <ButtonGeneral text="Delete all" handlePress={handleDeleteAll} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
  },
  createButtonContainer: {
    alignSelf: "flex-end",
    margin: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    alignSelf: "center",
  },
  userContainer: {
    margin: 50,
    alignItems: "center",
  },
  textContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listText: {
    color: "#fff",
    fontSize: 18,
  },
  deleteAllContainer: {
    alignSelf: "center",
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#BF5E24",
    borderRadius: 20,
  },
});
