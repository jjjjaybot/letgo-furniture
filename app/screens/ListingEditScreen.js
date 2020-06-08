import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { Form, FormField, FormPicker, SubmitButton } from "../components/form";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

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
    value: 1,
    backgroundColor: "red",
    icon: "apps"
  },
  {
    label: "B",
    value: 2,
    backgroundColor: "green",
    icon: "email"
  },
  {
    label: "C",
    value: 3,
    backgroundColor: "red",
    icon: "chair"
  }
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: 0,
          description: "",
          category: null
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name='title' placeholder='Title' />
        <FormField
          keyboardType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
          width={120}
        />
        <FormPicker
          numberOfColumns={3}
          items={categories}
          name='category'
          PickerItemComponent={CategoryPickerItem}
          placeholder='Category'
        />
        <FormField
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton title='Post' />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({});
