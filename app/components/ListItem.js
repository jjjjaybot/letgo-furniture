import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Swipeable
} from "react-native";

import AppText from "./AppText";
import App from "../../App";
import color from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent
}) {
  return (
    // <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={color.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          {subTitle && (
            <AppText style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </AppText>
          )}
        </View>
        <MaterialCommunityIcons
          name='chevron-right'
          size={25}
          color={color.gray}
        />
      </View>
    </TouchableHighlight>
    //{" "}
    // </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: color.white,
    alignItems: "center"
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
    marginLeft: 10,
    flex: 1
  }
});
