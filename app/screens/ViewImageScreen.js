import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/fam.jpg")}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    left: 50,
    position: "absolute",
    top: 40,
  },

  container: {
    backgroundColor: colors.black,
    flex: 1,
  },

  deleteIcon: {
    right: 50,
    position: "absolute",
    top: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
