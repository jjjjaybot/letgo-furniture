import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/chair.jpg")
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/chair.jpg")
  }
];

export default function MessagesScreen() {
  return (
    <FlatList
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({ item }) => <ListItem />}
    />
  );
}

const styles = StyleSheet.create({});
