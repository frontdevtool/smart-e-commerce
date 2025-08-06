import HomeScreen from "@/screens/HomeScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MainStackNavigator from "./MainStackNavigator";
import MainTopTabNavigator from "./MainTopTabNavigator";
const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator

    initialRouteName="settings"
    
      screenOptions={{
        
        headerTitleAlign: "center",
        //  headerShown: false,
        tabBarActiveTintColor: "blue",

        tabBarStyle: {
          // backgroundColor: 'green',
          // borderTopWidth: 1,
        },
        headerStyle: {
          // height: 60, // أو أي قيمة تناسبك
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        // component={MainStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          // headerShown : false
        }}
      />
      <Tab.Screen
        name="profile"
        // component={ProfileScreen}
        // component={MainStackNavigator}
        component={MainTopTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
          
        }}

      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
