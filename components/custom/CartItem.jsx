import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function CartItem({item}) {
  console.log('item: ', item);
  return (
    <View className="bg-slate-100 flex-row w-full p-1 h-28 border my-1">
      {/* image box */}
      <View className="flex-[2] h-full justify-start items-center bg-green-400">
        <Image
          className="w-[100%] h-full "
          source={{
            uri: "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg",
          }}
        />
        {/* <Text>111</Text> */}
      </View>
      {/* details box */}
      <View className="flex-[3.5] justify-around items-start">
        <Text>222</Text>
        <Text>222</Text>
        <View className="flex-row w-[70%] h-18 justify-around p-2 items-center bg-slate-200 border rounded-3xl ">
          <TouchableOpacity>
            <FontAwesome
              name="plus"
              size={10}
              className="  p-2 rounded-3xl border"
            />
          </TouchableOpacity>
          <Text>1</Text>
          <TouchableOpacity>
            <FontAwesome
              name="minus"
              size={10}
              className="   p-2 rounded-3xl border"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* delete box */}
      <View className="flex-[2] flex-row justify-around items-center ">
        <TouchableOpacity>

            <FontAwesome
              name="remove"
              size={24}
              className=""
              />
              </TouchableOpacity>
        <Text className="font-pbold">Delete</Text>

      </View>
    </View>
  );
}
