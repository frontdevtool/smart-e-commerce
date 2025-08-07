import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import AppText from "@/components/custom/AppText";
import FlashMessage, { showMessage } from "react-native-flash-message";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center gap-10">
      <AppText otherStyle={'text-secondary kazem'}>hi kazem fdfsdf </AppText>
    
          <FlashMessage position="center" /> {/* <--- here as the last component */}

      <Button mode="contained" onPress={() => {
          /* HERE IS WHERE WE'RE GOING TO SHOW OUR FIRST MESSAGE */
          showMessage({
            message: "تم إضافة القطعة بنجاح",
            type: "warning",
          });
        }} >
        Go to Profile
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate("settings" , {name : 'sami'})} >
        Go to settings
      </Button>
    </View>
  );
};

export default HomeScreen;
