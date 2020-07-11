import React, { useEffect } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from "react-native-expo-image-cache";
import LottieView from "lottie-react-native";

import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import usersApi from "../api/users";
import useApi from "../hooks/useApi";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  const getUsersApi = useApi(usersApi.getUsers);
  let listingUser;
  useEffect(() => {
    getUsersApi.request();
  }, []);
  const theOne = getUsersApi.data.filter(obj => obj.id === listing.userId);

  if (theOne[0]) {
    listingUser = theOne[0].name;
  }

  return (
    <KeyboardAvoidingView
      behavior='position'
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint='light'
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={
              listing.userId === 1
                ? require("../assets/jiazi.jpg")
                : require("../assets/john.png")
            }
            title={listingUser ? listingUser : ""}
            subTitle='3 Listings'
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}
// return (
//   <View style={styles.overlay}>
//     <LottieView
//       autoPlay
//       loop
//       source={require("../assets/animations/loader.json")}
//     />
//   </View>
// );

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 300
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "500"
  },
  userContainer: {
    marginVertical: 40
  }
});

export default ListingDetailsScreen;
