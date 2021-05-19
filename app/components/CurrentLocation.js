import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Permissions from "expo-permissions";
import { Location } from "expo";
import AppButton from "./AppButton";

function CurrentLocation(props) {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  getLocation = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        setError("Permission denied");

        return setLocation(await Location.getCurrentPositionAsync(location));
      }
    } catch (error) {
      const status = Location.getProviderStatusAsync();
      if (!status.locationSeviceEnabled) {
      }
    }
  };

  return (
    <View>
      <Text>Hello World</Text>
      <AppButton title="location" onPress={setLocation} />
    </View>
  );
}

export default CurrentLocation;
