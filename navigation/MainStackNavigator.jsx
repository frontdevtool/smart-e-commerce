import HomeScreen from "@/screens/HomeScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Pressable } from "react-native";

const MainStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} options={{
        headerRight :()=><Pressable onPress={()=>alert('hi kazem')}>send</Pressable>
      }}/>
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
