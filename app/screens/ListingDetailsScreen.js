import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppText from "./../components/AppText";
import ListItem from "./../components/ListItem";

function ListingDetailsScreen({ route }) {
  const listings = route.params;

  return (
    <View>
      <Image style={styles.image} source={listings.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listings.title}</AppText>
        <AppText style={styles.price}>{listings.subTitle}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/carren.jpg")}
            title="Jonathan Kasamani"
            subTitle="kasamani05@yahoo.com"
          />
        </View>
      </View>
    </View>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },

  image: {
    width: "100%",
    height: 300,
  },
  userContainer: {
    marginVertical: 50,
  },

  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
