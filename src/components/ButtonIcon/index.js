import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function ButtonIcon({ buttonName, buttonColor, handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <AntDesign name={buttonName} size={24} color={buttonColor} />
    </TouchableOpacity>
  );
}
