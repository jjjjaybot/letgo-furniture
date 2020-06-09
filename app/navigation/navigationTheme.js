import { DefaultTheme } from "@react-navigation/native";
import color from "../config/color";

export default {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.color,
    primary: color.white,
    background: color.black
  }
};
