import { View, Text } from "react-native";
import React from "react";
import { Button, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function TotalView() {
    const navigation = useNavigation()
  return (
    <View>
      <View className="flex-row justify-between p-2 ">
        <Text>Order totale</Text>
        <Text>10$</Text>
      </View>
      <View className="flex-row justify-between p-2 ">
        <Text>Taxes fees</Text>
        <Text>10$</Text>
      </View>
      <View className="flex-row justify-between p-2 ">
        <Text>Shipping fees</Text>
        <Text>10$</Text>
      </View>
      <Divider/>
      <View className="flex-row justify-between p-2 ">
        <Text>Order totale</Text>
        <Text>10$</Text>
      </View>
      <Button mode="contained" onPress={()=>navigation.navigate('')}>countinu</Button>
    </View>
  );
}
