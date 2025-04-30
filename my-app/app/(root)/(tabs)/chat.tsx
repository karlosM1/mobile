"use client";

import type React from "react";
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import NotificationCard from "@/app/components/NotificationCard";
import type HelmetViolation from "@/app/components/types";
import { useFetch } from "@/lib/fetch";
import { ViolationProps } from "@/types/type";
import { useUser } from "@clerk/clerk-expo";

// Sample violation data
const sampleViolations: (HelmetViolation & { id: string; read: boolean })[] = [
  {
    id: "1",
    number_plate: "ABC123",
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    isHelmet: "No Helmet",
    cropped_image: "",
    read: false,
  },
  {
    id: "2",
    number_plate: "XYZ789",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    isHelmet: "No Helmet",
    cropped_image: "",
    read: true,
  },
  {
    id: "3",
    number_plate: "DEF456",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    isHelmet: "Helmet",
    cropped_image: "",
    read: false,
  },
  {
    id: "4",
    number_plate: "GHI789",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    isHelmet: "No Helmet",
    cropped_image: "",
    read: true,
  },
];

type FilterType = "all" | "unread" | "violations";

const NotificationTab: React.FC = () => {
  const { user } = useUser();

  const [notifications, setNotifications] = useState(sampleViolations);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  // const { data: fetchedNotifications } = useFetch<ViolationProps[]>(
  //   `/(api)/${user?.plate_number}`,
  // )

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const filteredNotifications = notifications.filter((notification) => {
    if (activeFilter === "unread") return !notification.read;
    if (activeFilter === "violations")
      return notification.isHelmet === "No Helmet";
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;
  const violationCount = notifications.filter(
    (n) => n.isHelmet === "No Helmet"
  ).length;

  return (
    <SafeAreaView className="flex-1 bg-[#0E121A]">
      <View className="flex-row justify-between items-center px-4 py-3 border-b border-[#0E121A] bg-[#0E121A]">
        <View className="flex-row items-center">
          {/* <Bell width={24} height={24} color="#374151" /> */}
          <Text className="text-3xl font-extrabold ml-2 text-white">
            Notifications
          </Text>
        </View>
        <TouchableOpacity className="p-2">
          {/* <Filter width={20} height={20} color="#374151" /> */}
        </TouchableOpacity>
      </View>

      <View className="flex-row px-4 py-3 bg-[#0E121A] border-b border-[#0E121A]">
        <TouchableOpacity
          className={`mr-3 px-3 py-1.5 rounded-full ${
            activeFilter === "all" ? "bg-blue-100" : "bg-gray-100"
          }`}
          onPress={() => setActiveFilter("all")}
        >
          <Text
            className={`text-sm ${
              activeFilter === "all"
                ? "text-blue-600 font-medium"
                : "text-gray-600"
            }`}
          >
            All ({notifications.length})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`mr-3 px-3 py-1.5 rounded-full ${
            activeFilter === "unread" ? "bg-blue-100" : "bg-gray-100"
          }`}
          onPress={() => setActiveFilter("unread")}
        >
          <Text
            className={`text-sm ${
              activeFilter === "unread"
                ? "text-blue-600 font-medium"
                : "text-gray-600"
            }`}
          >
            Unread ({unreadCount})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-row items-center px-3 py-1.5 rounded-full ${
            activeFilter === "violations" ? "bg-red-100" : "bg-gray-100"
          }`}
          onPress={() => setActiveFilter("violations")}
        >
          {/* <AlertTriangle
            width={16}
            height={16}
            color={activeFilter === "violations" ? "#dc2626" : "#4b5563"}
            className="mr-1"
          /> */}
          <Text
            className={`text-sm ${
              activeFilter === "violations"
                ? "text-red-600 font-medium"
                : "text-gray-600"
            }`}
          >
            No Helmet ({violationCount})
          </Text>
        </TouchableOpacity>
      </View>

      {filteredNotifications.length > 0 ? (
        <FlatList
          data={filteredNotifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NotificationCard
              violation={item}
              onPress={() => markAsRead(item.id)}
              read={item.read}
            />
          )}
          contentContainerClassName="px-4 py-2"
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View className="flex-1 justify-center items-center px-6">
          {/* <Bell width={50} height={50} color="#d1d5db" /> */}
          <Text className="mt-4 text-base text-gray-500 text-center">
            No notifications to display
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default NotificationTab;
