import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { baseUrl } from "./BaseUrl";

function Welcome(props) {
  const [greetings, setGreetings] = useState("Click to connect");

  const connect = () => {
    // const URL = "http://102.2.139.65:3000/welcome";
    fetch(baseUrl + "/" + "welcome").then(response => {
      if (response.status === 200) {
        console.log(greetings);
        return greetings;
      } else {
        throw new Error("Something went wrong!");
      }
    });

    // .catch(error => {
    //   console.error(error.message);
    // })
    // .then(responseText => {
    //   setGreetings({ greetings });
    // });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{greetings}</Text>
      <Button style={styles.button} title="Connect" onPress={console.log("preessed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    width: "100%",
  },

  container: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "yellow",
    flex: 0.5,
    // flexDirection: "column",
    alignSelf: "center",
    height: 20,
    // justifyContent: "flex-end",
    width: "50%",
  },

  title: {
    color: "green",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default Welcome;
