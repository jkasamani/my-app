import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

function Card({ image, onPress, subTitle, title }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageCont}>
          <Image
            style={styles.image}
            source={image}
            title={title}
            subTitle={subTitle}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    padding: 20,
    overflow: "hidden",
    width: "100%",
  },

  detailsContainer: {
    padding: 20,
  },

  image: {
    width: "100%",
    height: 200,
  },

  imageCont: {
    borderRadius: 25,
  },

  subTitle: {
    color: "red",
    fontWeight: "bold",
  },

  title: {
    marginBottom: 10,
  },
});
