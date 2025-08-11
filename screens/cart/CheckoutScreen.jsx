import { View, Text } from "react-native";
import React from "react";
import FormField from "@/components/custom/FormField";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CheckoutScreen() {
  return (
    <SafeAreaView className="p-5   flex-1 justify-around">
      <View className="gap-5 ">
        <FormField label={"Full name"} />
        <FormField label={"Number"} />
        <FormField label={"Adress"} />
      </View>

        <Button mode="contained">confirm</Button>
    </SafeAreaView>
  );
}
