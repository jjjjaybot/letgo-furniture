import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import expoPushTokenApi from "../api/expoPushTokens";

export default useNotifications = notificationListener => {
  useEffect(() => {
    registerForPushNotifications();
    Notifications.addListener(notificationListener);
    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);
  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);

      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokenApi.register(token);
    } catch (error) {
      console.log("Error getting push token", error);
    }
  };
};
