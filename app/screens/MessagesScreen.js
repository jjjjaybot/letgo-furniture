import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Jiazi",
    description: "I want your chair, is anyone also buying it?",
    image: require("../assets/jiazi.jpg")
  },
  {
    id: 2,
    title: "John",
    description: "Can I see more photos of the chair?",
    image: require("../assets/boy1.png")
  },
  {
    id: 3,
    title: "Lee",
    description: "What other colors do you have?",
    image: require("../assets/girl1.jpg")
  },
  {
    id: 4,
    title: "Young",
    description: "Is this chair used?",
    image: require("../assets/boy2.png")
  },
  {
    id: 5,
    title: "Alice",
    description: "Is this chair of good quality?",
    image: require("../assets/girl2.png")
  }
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("a", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/chair.jpg")
            }
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
