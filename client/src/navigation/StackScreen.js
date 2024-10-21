import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "../screens/LoginScreen";
import { StyleSheet, Image, Text, View } from "react-native";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import TabScreen from "./TabScreen";
import ChatScreen from "../screens/chats/ChatScreen";

const Stack = createStackNavigator();
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

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
    </Stack.Navigator>
  );
}
