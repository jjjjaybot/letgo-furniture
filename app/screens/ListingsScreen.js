import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import color from "../config/color";

const listings = [
  {
    id: 1,
    title: "Red Jacket",
    price: 100,
    image: require("../assets/chair.jpg")
  },
  {
    id: 2,
    title: "Couch",
    price: 1000,
    image: require("../assets/chair.jpg")
  }
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: color.light
  }
});
