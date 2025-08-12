import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";
import { images } from "@/constants/images";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ProductCart({onPress , imageUrl , title , price}) {
  return (
    <View
      className="w-40 h-602  p-2 border
"
    >
      <TouchableOpacity className="z-10 absolute left-2 top-2 " onPress={onPress}>
        <FontAwesome name="shopping-cart" size={24} className=" " />
      </TouchableOpacity>
      <View className="p-2">
        <Image
          source={{ uri: imageUrl }}
          resizeMode="contain"
          style={{ width: 110, height: 110 }}
        />
      </View>
      <View className="ml-2 bg-slate-400">
        <Text>{title}</Text>
        <Text>price : {price}</Text>
      </View>
    </View>
  );
}
