import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import AppText from "../components/AppText";
import * as Progress from "react-native-progress";
import color from "../config/color";
import LottieView from "lottie-react-native";

export default function UploadScreen({
  onDone,
  progress = 0,
  visible = false
}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar progress={progress} color={color.primary} width={400} />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});
