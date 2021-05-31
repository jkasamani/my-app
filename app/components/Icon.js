import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({ iconColor = "white", name, size = 40, backgroundColor }) {
  return (
    <View style={styles.icon}>
      <MaterialCommunityIcons
        name={name}
        size={size / 2}
        color={iconColor}
        backgroundColor={backgroundColor}
      />
    </View>
  );
}

export default Icon;

const styles = StyleSheet.create({
  icon: {
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    width: 50,
  },
});
