import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({});
