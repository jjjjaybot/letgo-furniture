import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Text,
  AsyncStorage
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNetInfo } from "@react-native-community/netinfo";
import { AppLoading } from "expo";

import Screen from "./app/components/Screen";
import Button from "./app/components/Button";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import navigationRef from "./app/navigation/rootNavigation";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title='Click'
      onPress={() => navigation.navigate("TweetsDetails", { id: 1 })}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const TweetsDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white"
    }}
  >
    <Stack.Screen name='Tweets' component={Tweets} />
    <Stack.Screen
      name='TweetsDetails'
      component={TweetsDetails}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "#000"
    }}
  >
    <Tab.Screen
      name='Feed'
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='home' size={size} color={color} />
        )
      }}
    />
    <Tab.Screen name='Account' component={Account} />
  </Tab.Navigator>
);
export default function App() {
  const netinfo = useNetInfo();
  const [isReady, setIsReady] = useState(false);
  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };
  demo();
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
