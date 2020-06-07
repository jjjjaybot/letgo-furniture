import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import AppText from "../components/AppText";
import color from "../config/color";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red stuff</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/chair.jpg")}
            title='Jiazi Cai'
            subTitle='5 Listings'
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 300
  },
  title: {
    fontSize: 24,
    fontWeight: "500"
  },
  price: {
    color: color.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10
  },
  userContainer: {
    marginVertical: 40
  }
});
