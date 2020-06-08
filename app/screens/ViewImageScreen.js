import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../config/color";

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='delete' size={30} />
      </View>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%"
  },
  container: {
    backgroundColor: color.white,
    flex: 1
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30
  }
});
