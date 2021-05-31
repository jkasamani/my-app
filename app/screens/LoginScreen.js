import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppFormField from "../components/AppFormField";
import Screen from "../components/Screen";
import SubmitButton from "./../components/SubmitButton";
import AppForm from "../components/AppForm";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/carren.jpg")} />
      <AppForm
        initialValues={{ password: "", email: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          keyboardType="numeric"
          name="password"
          placeholder="Password"
          secureTextEntry
        />
        <SubmitButton title="login" />
      </AppForm>
    </Screen>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  image: {
    alignSelf: "center",
    borderRadius: 40,
    height: 80,
    marginBottom: 20,
    marginTop: 50,
    width: 80,
  },
});
