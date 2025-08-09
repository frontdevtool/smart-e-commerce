import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";
import { images } from "@/constants/images";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ProductCart() {
  return (
    <View
      className="w-40 h-602  p-2 border
"
    >
      <TouchableOpacity className="z-10 absolute left-2 top-2 ">
        <FontAwesome name="shopping-cart" size={24} className=" " />
      </TouchableOpacity>
      <View className="p-2">
        <Image
          source={{ uri: "https://picsum.photos/700" }}
          resizeMode="contain"
          style={{ width: 110, height: 110 }}
        />
      </View>
      <View className="ml-2 bg-slate-400">
        <Text>TV</Text>
        <Text>price : 160$</Text>
      </View>
    </View>
  );
}
