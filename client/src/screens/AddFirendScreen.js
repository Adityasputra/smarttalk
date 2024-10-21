import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function AddFriendScreen({ navigation }) {
  const [friendId, setFriendId] = useState("");

  const handleAddFriend = () => {
    if (friendId.trim()) {
      console.log("Adding friend with ID:", friendId);
      setFriendId("");
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Add a Friend</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Enter friend ID or phone number"
        value={friendId}
        onChangeText={setFriendId}
      />
      <TouchableOpacity style={styles.buttonSend} onPress={handleAddFriend}>
        <Text style={styles.buttonText}>Add Friend</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  //   title: {
  //     fontSize: 24,
  //     fontWeight: "bold",
  //     marginBottom: 20,
  //     textAlign: "center",
  //   },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonSend: {
    backgroundColor: "#1a1a1a",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
