import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { Form, FormField, FormPicker, SubmitButton } from "../components/form";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/form/FormImagePicker";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

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
    .label("Category"),
  images: Yup.array().min(1, "Please select at least one image")
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
    icon: "account"
  }
];

export default function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    listing.location = location;
    const result = await listingsApi.addListing(
      { ...listing, location },
      progress => setProgress(progress)
    );
    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing.");
    }
    resetForm();
  };
  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Form
        initialValues={{
          title: "",
          price: 0,
          description: "",
          category: null,
          images: []
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name='images' />
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
