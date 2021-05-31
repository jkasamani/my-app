import React from "react";
import ListItem from "./ListItem";
import Screen from "./Screen";

function AccountsScreen({ navigation }) {
  return (
    <Screen>
      <ListItem
        title="Jonathan Kasamani"
        subTitle="kasamani05@yahoo.com"
        image={require("../assets/carren.jpg")}
      />
    </Screen>
  );
}

export default AccountsScreen;
