import HomeScreen from "@/screens/HomeScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="profile" component={ProfileScreen} />
      <Drawer.Screen name="settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
