import { SignedIn, useUser } from "@clerk/clerk-expo";
import { Text, View } from "react-native";
import { SignOutButton } from "@/app/components/SignOutButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { user } = useUser();

  return (
    <SafeAreaView>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <SignOutButton />
      </SignedIn>
    </SafeAreaView>
  );
}
