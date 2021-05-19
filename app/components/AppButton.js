import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function AppButton({ color, onPress, title }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 25,
    justifyContent: "center",
    padding: 15,
    marginVertical: 10,
    position: "relative",
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
