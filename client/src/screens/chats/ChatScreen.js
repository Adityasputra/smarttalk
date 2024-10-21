import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

// Icon imports
import { FontAwesome } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello!", sender: "user" },
    { id: "2", text: "Hi, how are you?", sender: "friend" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: Date.now().toString(), text: newMessage, sender: "user" },
      ]);
      setNewMessage("");
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "user" ? styles.userMessage : styles.friendMessage,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          item.sender === "friend" ? styles.friendText : styles.userText,
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        style={styles.chatArea}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="paperclip" size={24} color="#888" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <MaterialCommunityIcons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
  },
  chatArea: {
    flex: 1,
    padding: 15,
  },
  messageContainer: {
    padding: 12,
    borderRadius: 20,
    marginVertical: 8,
    maxWidth: "75%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#1a1a1a",
    borderTopRightRadius: 0,
  },
  friendMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#1a1a1a",
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: "#fff",
  },
  friendText: {
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    fontSize: 16,
    marginHorizontal: 10,
  },
  sendButton: {
    backgroundColor: "#1a1a1a",
    padding: 10,
    borderRadius: 25,
  },
  iconButton: {
    padding: 10,
  },
});
