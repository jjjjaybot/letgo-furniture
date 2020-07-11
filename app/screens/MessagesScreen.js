import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator
} from "../components/lists";
import useApi from "../hooks/useApi";
import messageApi from "../api/messages";
import useAuth from "../auth/useAuth";

function MessagesScreen(props) {
  const getMessagesApi = useApi(messageApi.getMessages);
  const { user } = useAuth();

  useEffect(() => {
    getMessagesApi.request();
  }, []);
  const [messages, setMessages] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // Delete the message from messages
    setMessages(messages.filter(m => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={getMessagesApi.data.filter(m => m.toUser.id === user.userId)}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.fromUser.name}
            subTitle={item.content}
            image={
              item.fromUser.id === 1
                ? require("../assets/jiazi.jpg")
                : require("../assets/john.png")
            }
            onPress={() => console.log("Message selected", item)}
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
              image: require("../assets/jiazi.jpg")
            }
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
