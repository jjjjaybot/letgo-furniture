import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText";
import App from "../../App";
import color from "../config/color";

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={color.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: color.white
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  title: {
    fontWeight: "500",
    color: color.black
  },
  subTitle: {
    color: color.gray
  },
  detailsContainer: {
    justifyContent: "center",
    marginLeft: 10
  }
});
