import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation
} from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <Card
        title='Red jacket'
        subTitle='$100'
        image={require("./app/assets/chair.jpg")}
      /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <AccountScreen /> */}
      <ListingsScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
