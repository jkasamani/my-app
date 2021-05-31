import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import colors from "../config/colors";
import Card from "./../components/Card";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 59,
    image: require("../assets/carren.jpg"),
  },

  {
    id: 2,
    title: "Red jacket for sale",
    price: 59,
    image: require("../assets/carren.jpg"),
  },

  {
    id: 3,
    title: "Red jacket for sale",
    price: 59,
    image: require("../assets/carren.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={item.price}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
  },
});
