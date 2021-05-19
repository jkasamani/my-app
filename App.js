import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "./app/components/Map";
import AppContacts from './app/components/AppContacts';
import CurrentLocation from './app/components/CurrentLocation';
import Welcome from './app/components/Welcome';
import AppButton from "./app/components/AppButton";

export default function App() {
  return <AppButton />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
