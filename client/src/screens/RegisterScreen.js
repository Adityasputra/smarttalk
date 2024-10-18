const {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} = require("react-native");
const React = require("react");
import { useRoute } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";

export default function RegisterScreen({ navigation }) {
  const router = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Entypo name="chat" size={64} color="white" />
        <Text style={styles.headerText}>SmartTalk</Text>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Register</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#aaa"
        />

        <TouchableOpacity style={styles.buttonSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={styles.signInLink}
        >
          <Text>
            Already have an account?{" "}
            <Text style={styles.signInText}>Sign In</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  header: {
    height: 180,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    borderTopLeftRadius: 60,
    // borderTopRightRadius: 60,
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonSubmit: {
    width: "100%",
    height: 50,
    backgroundColor: "#333",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInLink: {
    marginTop: 20,
  },
  signInText: {
    color: "#1a73e8",
    textDecorationLine: "underline",
  },
});
