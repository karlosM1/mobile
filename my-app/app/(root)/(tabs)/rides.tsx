import { Text, View } from "react-native";
import * as Location from "expo-location";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import { useLocationStore } from "@/store";
import { useEffect, useState } from "react";
import { calculateRegion } from "@/lib/map";
import { icons } from "@/constants";
import { router } from "expo-router";
import GoogleTextInput from "@/app/components/GoogleTextInput";

const Rides = () => {
  const { setUserLocation, setDestinationLocation } = useLocationStore();

  const [hasPermissions, setHasPermissions] = useState(false);

  useEffect(() => {
    const requestLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setHasPermissions(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync();

      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!,
      });

      setUserLocation({
        // latitude: location.coords.latitude,
        // longitude: location.coords.longitude,
        latitude: 14.5916,
        longitude: 120.9778,
        address: `${address[0].name}, ${address[0].region}`,
      });
    };

    requestLocation();
  }, []);

  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();

  const region = calculateRegion({
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  });

  const handleDestinationPress = () => {};

  return (
    <SafeAreaView className="flex-1 bg-[#0E121A]">
      <View>
        <GoogleTextInput
          icon={icons.search}
          containerStyle="bg-white shadow-md shadow-neutral-300"
          handlePress={handleDestinationPress}
        />
      </View>
      <View className="flex-1">
        <MapView
          provider={PROVIDER_DEFAULT}
          tintColor="black"
          mapType="mutedStandard"
          showsPointsOfInterest={false}
          initialRegion={region}
          showsUserLocation={true}
          userInterfaceStyle="dark"
          style={{ height: 600, width: "100%" }}
        ></MapView>
      </View>
    </SafeAreaView>
  );
};
export default Rides;
