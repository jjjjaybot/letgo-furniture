import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton
} from "../components/form";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required()
    .min(1)
    .label("Title"),
  price: Yup.number()
    .required()
    .min(1)
    .max(10000)
    .label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object()
    .required()
    .nullable()
    .label("Category")
});

const categories = [
  {
    label: "A",
    value: 1
  },
  {
    label: "B",
    value: 2
  },
  {
    label: "C",
    value: 3
  }
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: 0,
          description: "",
          category: null
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name='title' placeholder='Title' />
        <AppFormField
          keyboardType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
        />
        <AppFormPicker
          items={categories}
          name='category'
          placeholder='Category'
        />
        <AppFormField
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton title='Post' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});
