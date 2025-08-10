import { View, Text } from "react-native";
import React from "react";
import HomeHeader from "@/components/custom/HomeHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyCart from "./EmptyCart";
import CartItem from "@/components/custom/CartItem";
import TotalView from "@/components/custom/TotalView";

export default function CartScreen() {
  return (
    <SafeAreaView className="flex-1 ">
      <View>
        <HomeHeader />
      </View>
      {/* <Text>cart scren</Text> */}
        {/* <EmptyCart /> */}
      <View className="justify-start  flex-1 bg-red-300 p-1">
        <View className="flex-1">
          <CartItem />
          <CartItem />
         
        </View>
        <TotalView />
      </View>
    </SafeAreaView>
  );
}
