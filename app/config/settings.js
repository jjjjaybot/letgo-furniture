import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.0.88:9000/api"
  },
  staging: {
    apiUrl: "http://192.168.0.88:9000/api"
  },
  prod: {
    apiUrl: "https://letgo-backend.herokuapp.com/api"
  }
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
