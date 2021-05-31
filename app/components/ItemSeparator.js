import React from "react";
import { StyleSheet, View } from "react-native";

function ItemSeparator() {
  return <View style={styles.separator} />;
}

export default ItemSeparator;

const styles = StyleSheet.create({
  separator: {
    backgroundColor: "black",
    height: 1,
    width: "100%",
  },
});
