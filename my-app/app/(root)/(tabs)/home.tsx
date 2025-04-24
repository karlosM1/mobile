import { SignedIn, useUser } from "@clerk/clerk-expo";
import { Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomePageCard from "@/app/components/HomePageCard";
import ArrowPointer from "@/app/components/ArrowPointer";
import { icons, images } from "@/constants";

export default function Home() {
  const { user } = useUser();

  const cards = [
    {
      title: "Violations",
      description: "3",
      icon: icons.crisis,
      className: "bg-[#FC574E] w-[48%] mb-2 h-[100px]",
    },
    {
      title: "Weather",
      description: "Sunny",
      icon: icons.cloudy,
      className: "bg-blue-500 w-[48%] mb-2 h-[100px]",
    },
    {
      title: "Safety Tips",
      description: "8",
      icon: icons.helmet,
      className: "bg-[#F7C846] w-[48%] mb-2 h-[100px]",
    },
    {
      title: "Notifications",
      description: "2",
      icon: icons.berk,
      className: "bg-[#8AE98D] w-[48%] mb-2 h-[100px]",
    },
  ];

  const parts = [
    {
      parts: "Full Face Helmet",
      className: "absolute top-8 left-72",
      position: "left-[-20px] top-[4]",
    },
    {
      parts: "Leather Suit",
      className: "absolute top-40 left-72",
      position: "left-[-20px] top-[4]",
    },
    {
      parts: "Knee Armor",
      className: "absolute top-72 left-72",
      position: "left-[-20px] top-[4]",
    },
    {
      parts: "Elbow Armor",
      className: "absolute top-28 left-2",
      position: "left-[88px] top-[4]",
      enableBorderLeft: true,
    },
    {
      parts: "Motorcycle Gloves",
      className: "absolute top-60 left-2",
      position: "left-[68px] top-[-16px]",
      enableBorderLeft: true,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#0E121A]">
      <SignedIn>
        <ScrollView contentContainerStyle={{ paddingBottom: 64 }}>
          <View className="mb-8 mt-4">
            <Text
              className="text-3xl font-semibold mb-4 ml-4"
              style={{ color: "#6e727a" }}
            >
              Hello, {user?.emailAddresses[0].emailAddress}
            </Text>
          </View>

          <View className="mx-4 mb-4">
            <View>
              <HomePageCard
                title="News"
                description="Stay updated with the latest news ang mga motorista sa edsa ay walang kaanoanong nag banggaan sa kadahilanang paubos na daw ang donut sa krispy kreme."
                icon={icons.news}
                iconStyle="w-20 h-20"
                className="bg-[#373B41] w-[100%] mb-2 h-[150px]"
              />
            </View>

            <View className="flex flex-row flex-wrap justify-between items-center mb-4">
              {cards.map((card, index) => (
                <HomePageCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  className={card.className}
                />
              ))}
            </View>

            <View className="mt-12">
              <Text className="text-3xl font-extrabold ml-4 text-white text-center">
                What Makes Up a Rider's Gear?
              </Text>
            </View>

            <View className="mt-8">
              <Image
                source={images.dmodel}
                className="w-full h-[400px] rounded-2xl"
                resizeMode="contain"
              />
              {parts.map((part, index) => (
                <ArrowPointer
                  key={index}
                  parts={part.parts}
                  className={part.className}
                  position={part.position}
                  enableBorderLeft={part.enableBorderLeft}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </SignedIn>
    </SafeAreaView>
  );
}
