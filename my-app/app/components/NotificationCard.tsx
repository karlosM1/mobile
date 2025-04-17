import React from "react";
import { View, Text, Image } from "react-native";

interface NotificationCardProps {
  riderName: string;
  message: string;
  address: string;
  dateTime: string;
  paymentStatus: string;
  violation: string;
  violationImage?: string;
}

const NotificationCard = ({
  riderName,
  message,
  address,
  dateTime,
  paymentStatus,
  violation,
  violationImage,
}: NotificationCardProps) => {
  return (
    <View className="bg-white rounded-lg p-4 mb-4 shadow-md">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-bold">{riderName}</Text>
        <Text className="text-xs text-gray-500">{dateTime}</Text>
      </View>

      <Text className="text-base mb-1">{message}</Text>
      <Text className="text-base text-gray-500 mb-3">{address}</Text>

      <View className="h-px bg-gray-200 my-3" />

      <Text className="text-base text-red-500 mb-3">{violation}</Text>

      {violationImage && (
        <Image
          source={{ uri: violationImage }}
          className="w-full h-36 rounded-lg mb-3"
          resizeMode="contain"
        />
      )}

      <View className="flex-row justify-end">
        <Text
          className={`text-base font-bold ${
            paymentStatus === "Paid" ? "text-green-500" : "text-red-500"
          }`}
        >
          {paymentStatus}
        </Text>
      </View>
    </View>
  );
};

export default NotificationCard;
