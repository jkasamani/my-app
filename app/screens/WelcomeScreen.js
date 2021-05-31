import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/dear.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/carren.jpg")} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          color="primary"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },

  buttonContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    borderRadius: 35,
    height: 70,
    width: 70,
  },

  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 50,
  },

  text: {
    color: "blue",
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
