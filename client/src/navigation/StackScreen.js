import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, Text, View } from "react-native";

// Screen Imports
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/chats/ChatScreen";
import AddFriendScreen from "../screens/AddFirendScreen";

// Tab Imports
import TabScreen from "./TabScreen";

const Stack = createStackNavigator();

// Main Stack Screen
export default function StackScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Authentication Screens
export function AuthStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabScreen"
        component={TabScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ route }) => ({
          // headerStyle: {
          //   borderBottomLeftRadius: 20,
          //   borderBottomRightRadius: 20,
          // },
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                // source={{ uri: route.params.profilePic }}
                source={{
                  uri: "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2023/07/multiverse.webp",
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginRight: 10,
                }}
              />
              <View
                style={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Aditya</Text>
                <Text style={{ fontSize: 14, color: "gray", marginTop: -5 }}>
                  online
                </Text>
              </View>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="AddFriend"
        component={AddFriendScreen}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Add Friend",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});