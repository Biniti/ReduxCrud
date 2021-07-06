import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function ButtonGeneral({ text, handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
