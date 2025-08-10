import * as React from "react";
import { StyleSheet } from "react-native";

import "./global.css";

import AuthStack from "@/navigation/AuthStack";
import MainStack from "@/navigation/MainStack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';
import { ActivityIndicator } from "react-native-paper";
import CartItem from "@/components/custom/CartItem";

const index = () => {
    const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  if(!fontsLoaded) {
      return <ActivityIndicator size={"large"}/>
    }

  return (
    <>
      {/* <MainTopTabNavigator/> */}
      {/* <MainBottomTabsNavigator/> */}
      {/* <MainStackNavigator/> */}
      {/* <MainDrawerNavigator/> */}
      {/* <SignInScreen/> */}
      {/* <SignUpScreen/> */}
      
      {/* <AuthStack/> */}
      <MainStack/>
      {/* <CartItem/> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default index;
