import { icons, images } from ".";

export const cards = [
  {
    title: "Violations",
    description: "3",
    icon: icons.crisis,
    className: "bg-[#FC574E] w-[48%] mb-2 h-[100px]",
    destination: "/(tabs)/chat",
  },
  {
    title: "Weather",
    description: "Sunny",
    icon: icons.cloudy,
    className: "bg-blue-500 w-[48%] mb-2 h-[100px]",
    destination: "",
  },
  {
    title: "Safety Tips",
    description: "8",
    icon: icons.helmet,
    className: "bg-[#F7C846] w-[48%] mb-2 h-[100px]",
    destination: "",
  },
  {
    title: "Notifications",
    description: "2",
    icon: icons.berk,
    className: "bg-[#8AE98D] w-[48%] mb-2 h-[100px]",
    destination: "/(tabs)/chat",
  },
];

export const parts = [
  {
    parts: "Full Face Helmet",
    className: "absolute top-8 left-72",
    position: "left-[-20px] top-[4]",
  },
  {
    parts: "Rider Suit",
    className: "absolute top-[132px] left-[245px]",
    position: "left-[-20px] top-[4]",
  },
  {
    parts: "Knee Armor",
    className: "absolute top-[250px] left-72",
    position: "left-[-20px] top-[4]",
  },
  {
    parts: "Elbow Armor",
    className: "absolute top-[106px] left-[0px]",
    position: "left-[82px] top-[4]",
    enableBorderLeft: true,
  },
  {
    parts: "Motorcycle Gloves",
    className: "absolute top-[210px] left-[0px]",
    position: "left-[76px] top-[-16px]",
    enableBorderLeft: true,
  },
  {
    parts: "Boots",
    className: "absolute top-[326px] left-[72px]",
    position: "left-[42px] top-[4]",
    enableBorderLeft: true,
  },
];

export const safety = [
  {
    title: "Always Wear a Helmet",
    description: "aadsadsdasd",
    image: images.standardhelmet,
  },
  {
    title: "Follow Traffic Rules",
    description: "Always follow the traffic rules for safety.",
    image: images.dmodel,
  },
  {
    title: "Check Your Bike",
    description: "Ensure your bike is in good condition before riding.",
    image: images.dmodel,
  },
];
