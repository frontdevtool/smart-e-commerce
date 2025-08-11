import SignInScreen from "@/screens/auth/SignInScreen";
import SignUpScreen from "@/screens/auth/SignUpScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { Pressable } from "react-native";
import AuthStack from "./AuthStack";
import MainBottomTab from "./MainBottomTab";
import CheckoutScreen from "@/screens/cart/CheckoutScreen";

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator >
      <Stack.Screen name="AuthStack" component={AuthStack} 
      options={{headerShown:false}}
    />
      <Stack.Screen name="MainBottomTab" component={MainBottomTab}
       options={{headerShown:false}} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} 
      options={{
        headerStyle : {height : 50 },
        title :'checkout'
      }}
/>
    </Stack.Navigator>
  );
};

export default MainStack;