import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import Button from "../components/Button";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagLine}>Sell your furnitures</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title='Login' />
        <Button title='Register' colors='secondary' />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4"
  },
  logo: {
    height: 75,
    width: 75
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center"
  },
  buttonsContainer: {
    padding: 20,
    width: "100%"
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20
  }
});
