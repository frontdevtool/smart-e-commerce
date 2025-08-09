import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-size-matters";
import FormField from "@/components/custom/FormField";
import { Button } from "react-native-paper";
export default function SignInScreen({navigation}) {
  console.log("s(20): ", s(20));

  return (
    <SafeAreaView className="flex-1 bg-secondary-200 justify-start items-center">
      <Text className="text-2xl font-bold bg-red-300 p border ">
        SingInScreen{" "}
      </Text>
      <Image
        source={images.appLogo}
        className=" mb-5 "
        style={{ width: 200, height: 200 }}
      />
      <View className=" w-full p-4">
        <FormField label={'email'} otherstyle={'my-8' } />
        <FormField label={'psssword'} />
        <Button mode="contained" className="my-5 " onPress={()=>navigation.navigate('MainBottomTab')}>login</Button>
        <Button mode="contained" className="my-1 " onPress={()=>navigation.navigate('SignUpScreen')}>signup</Button>
      </View>
    </SafeAreaView>
  );
}
