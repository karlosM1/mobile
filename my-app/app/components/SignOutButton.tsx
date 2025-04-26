import { useClerk } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { Text, Image, TouchableOpacity } from "react-native";

import { icons } from "@/constants";

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect to your desired page
      Linking.openURL(Linking.createURL("/"));
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <TouchableOpacity
      className="w-full rounded-lg p-4 flex flex-row justify-center items-center shadow-md bg-[#F0F0F0]"
      onPress={handleSignOut}
    >
      <Image
        source={icons.logout}
        className="w-6 h-6 mr-2"
        resizeMode="contain"
      />
      <Text className="text-red-600 text-lg font-semibold">Sign out</Text>
    </TouchableOpacity>
  );
};
