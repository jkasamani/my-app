import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
  SafeAreaView,
  FlatList,
} from "react-native";
import * as Contacts from "expo-contacts";
// import  Permissions  from 'expo-permissions';
import AppButton from "./AppButton";

function AppContacts(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });

      if (data.length > 0) {
        console.log(data);
      }
    }
  };

  return (
    <SafeAreaView>
      <TouchableHighlight>
        <View style={styles.container}>
          <Text>contacts</Text>

          <AppButton
            style={styles.button}
            title="contacts"
            onPress={getContacts}
          />
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    width: "100%",
    height: 100,
  },
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

export default AppContacts;
