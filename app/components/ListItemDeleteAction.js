import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../config/color";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ListItemDeleteAction({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <MaterialCommunityIcons
          name='trash-can'
          size={35}
          color={color.white}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center"
  }
});
