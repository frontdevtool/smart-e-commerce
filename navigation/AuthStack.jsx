import Auth from "@/components/custom/Auth";
import SignInScreen from "@/screens/auth/SignInScreen";
import SignUpScreen from "@/screens/auth/SignUpScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { Pressable } from "react-native";

const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} options={{
        // headerRight :()=><Pressable onPress={()=>alert('hi kazem')}>send</Pressable>
      }}/>
      {/* <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
};

export default AuthStack;