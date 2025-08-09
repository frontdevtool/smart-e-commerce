import SignInScreen from "@/screens/auth/SignInScreen";
import SignUpScreen from "@/screens/auth/SignUpScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { Pressable } from "react-native";
import AuthStack from "./AuthStack";
import MainBottomTab from "./MainBottomTab";

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name="AuthStack" component={AuthStack} 
    />
      <Stack.Screen name="MainBottomTab" component={MainBottomTab} />
    </Stack.Navigator>
  );
};

export default MainStack;