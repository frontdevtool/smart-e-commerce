import { View, Text } from "react-native";
import React from "react";
import { Button, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TotalView({itemPrice ,orderTotal}) {
    const navigation = useNavigation()
  return (
    <View className="mb-6">
      <View className="flex-row justify-between p-2 ">
        <Text>item price :  </Text>
        <Text>{itemPrice} $</Text>
      </View>
      <View className="flex-row justify-between p-2 ">
        <Text>Taxes fees</Text>
        <Text>5$</Text>
      </View>
      <View className="flex-row justify-between p-2 ">
        <Text>Shipping fees</Text>
        <Text>10$</Text>
      </View>
      <Divider/>
      <View className="flex-row justify-between p-2 ">
        <Text>Order totale</Text>
        <Text> {orderTotal} $</Text>
      </View>
      <Button mode="contained" onPress={()=>navigation.navigate('CheckoutScreen')}>countinu</Button>
    </View>
  );
}
