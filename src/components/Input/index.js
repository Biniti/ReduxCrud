import React from "react";
import { TextInput, StyleSheet } from "react-native";

export function Input({ valueName, placeholder, textChanged }) {
  return (
    <TextInput
      value={valueName}
      placeholder={placeholder}
      onChangeText={textChanged}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    backgroundColor: "white",
    borderColor: "#9876CC",
    paddingHorizontal: 30,
  },
});
