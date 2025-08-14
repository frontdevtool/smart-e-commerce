import { View, Text } from "react-native";
import React from "react";
import { Button, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCartStore } from "@/store/store";
import {   taxes,shippingFees } from "@/constants/constants";

export default function TotalView({itemPrice ,orderTotal}) {
    const navigation = useNavigation()
    const  {getTotalPrice} = useCartStore();
     const totalPrice = getTotalPrice(); // حساب المبلغ الإجمالي

    const totalOrder = totalPrice + taxes +  shippingFees

  return (
    <View className="mb-6">
      <View className="flex-row justify-between p-2 ">
        <Text>item price :  </Text>
        <Text>{totalPrice} $</Text>
      </View>
      <View className="flex-row justify-between p-2 ">
        <Text>Taxes fees</Text>
        <Text> {taxes} $</Text>
      </View>
      <View className="flex-row justify-between p-2 ">
        <Text>Shipping fees</Text>
        <Text> {shippingFees} $</Text>
      </View>
      <Divider/>
      <View className="flex-row justify-between p-2 ">
        <Text>Order totale</Text>
        {/* <Text> {orderTotal} $</Text> */}
        <Text> {totalOrder} $</Text>
      </View>
      <Button mode="contained" onPress={()=>navigation.navigate('CheckoutScreen')}>countinu</Button>
    </View>
  );
}
