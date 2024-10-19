import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Ionicons } from "@expo/vector-icons";
import FriendScreen from "../screens/FriendScreen";
import GrupScreen from "../screens/GrupScree";
import SettingScreen from "../screens/SettingScreen";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          height: 60,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Smart Talk",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={[
                  {
                    backgroundColor: focused ? "#E6E6FA" : "transparent",
                    borderRadius: 30,
                    padding: 15,
                    position: "absolute",
                    bottom: focused ? 5 : -25,
                    transition: "bottom 0.3s",
                  },
                ]}
              >
                <Ionicons
                  name="chatbox-ellipses"
                  size={24}
                  color={focused ? "black" : "white"}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Friend"
        component={FriendScreen}
        options={{
          headerTitle: "Smart Talk",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={[
                  {
                    backgroundColor: focused ? "#E6E6FA" : "transparent",
                    borderRadius: 30,
                    padding: 15,
                    position: "absolute",
                    bottom: focused ? 5 : -25,
                    transition: "bottom 0.3s",
                  },
                ]}
              >
                <FontAwesome5
                  name="user-friends"
                  size={22}
                  color={focused ? "black" : "white"}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Grup"
        component={GrupScreen}
        options={{
          headerTitle: "Smart Talk",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={[
                  {
                    backgroundColor: focused ? "#E6E6FA" : "transparent",
                    borderRadius: 30,
                    padding: 15,
                    position: "absolute",
                    bottom: focused ? 5 : -25,
                    transition: "bottom 0.3s",
                  },
                ]}
              >
                <Ionicons
                  name="chatbubbles"
                  size={24}
                  color={focused ? "black" : "white"}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerTitle: "Smart Talk",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={[
                  {
                    backgroundColor: focused ? "#E6E6FA" : "transparent",
                    borderRadius: 30,
                    padding: 15,
                    position: "absolute",
                    bottom: focused ? 5 : -25,
                    transition: "bottom 0.3s",
                  },
                ]}
              >
                <Ionicons
                  name="settings"
                  size={24}
                  color={focused ? "black" : "white"}
                />
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
