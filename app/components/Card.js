import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from "react-native";

import color from "../config/color";
import AppText from "./AppText";

export default function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: color.white,
    marginBottom: 20,
    overflow: "hidden",
    borderRadius: 15
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 200
  },
  title: {
    marginBottom: 7
  },
  subTitle: {
    color: color.secondary,
    fontWeight: "bold"
  }
});
