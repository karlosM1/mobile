import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import { icons } from "@/constants";

interface HomePageCardProps {
  title: string;
  description: string;
  icon: ImageSourcePropType;
  className?: string;
  iconStyle?: string;
}

const HomePageCard = ({
  title,
  description,
  icon,
  className,
  iconStyle,
}: HomePageCardProps) => {
  return (
    <TouchableOpacity
      className={`flex flex-row justify-between rounded-2xl p-4 mb-4 ${className}`}
    >
      <View className="flex-1">
        <Text className="text-white text-2xl my-3 font-bold">{title}</Text>
        <Text className="text-white text-lg">{description}</Text>
      </View>
      <View className="justify-center items-center">
        <Image
          source={icon}
          className={`w-11 h-11 ${iconStyle}`}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
};

export default HomePageCard;
