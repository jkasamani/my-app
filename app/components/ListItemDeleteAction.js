import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "./Icon";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="trash-can" size={30} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.danger,
    height: 150,
    justifyContent: "center",
    width: 70,
  },
});
