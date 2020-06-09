import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import color from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name='plus-circle'
          color={color.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    height: 80,
    width: 80,
    bottom: 20,
    borderRadius: 40,
    borderColor: color.white,
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});
