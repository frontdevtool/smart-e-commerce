import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants/images";

export default function HomeHeader() {
  return (
    <View className="bg-black-200 flex-row justify-center items-center p-2">
      <Image
        source={images.appLogo}
        tintColor={"white"}
        style={{ width: 50, height: 50 }}
        className=" border border-red-400"
      />
    </View>
  );
}
