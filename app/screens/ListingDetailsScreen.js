import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import color from "../config/color";
import ListItem from "../components/ListItem";
import ContactSellerForm from "../components/ContactSellerForm";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <KeyboardAvoidingView
      behavior='position'
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
        tint='light'
        preview={{ uri: listing.images[0].thumbnailUrl }}
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/jiazi.jpg")}
            title='Jiazi Cai'
            subTitle='5 Listings'
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
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
