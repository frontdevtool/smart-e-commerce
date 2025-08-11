import SignInScreen from "@/screens/auth/SignInScreen";
import SignUpScreen from "@/screens/auth/SignUpScreen";
import CartScreen from "@/screens/cart/CartScreen";
import HomeScreen from "@/screens/home/HomeScreen";
import ProfileScreen from "@/screens/profile/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable } from "react-native";
import { Icon } from "react-native-paper";

const MainBottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown : false , tabBarStyle : {height :70} }}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} 
        options={{
             tabBarIcon : ({color})=><FontAwesome name="home" size={24} color={color} />
        }}/>
      <Tab.Screen name="CartScreen" component={CartScreen} options={{
        tabBarIcon : ({color})=><FontAwesome name="id-card" size={24} color={color} />
      }}/>
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
        // headerRight :()=><Pressable onPress={()=>alert('hi kazem')}>send</Pressable>
         tabBarIcon : ({color})=><FontAwesome name="pencil-square-o" size={24} color={color} />
      }}/>
    </Tab.Navigator>
  );
};

export default MainBottomTab;