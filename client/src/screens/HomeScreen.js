import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// Icons Imports
import { Ionicons } from "@expo/vector-icons";

const users = [
  {
    id: 1,
    name: "Yog Sothoth",
    message: "The Truth?",
    profilePic:
      "https://ih1.redbubble.net/image.4742602042.5317/raf,360x360,075,t,fafafa:ca443f4786.u1.jpg",
  },
  {
    id: 2,
    name: "Nyarlathotep",
    message: "He came from the future",
    profilePic:
      "https://static.wikia.nocookie.net/lovecraft/images/0/00/Nyarlthotep.jpg/revision/latest?cb=20150525013305",
  },
  {
    id: 3,
    name: "Thanatos",
    message: "An unnamed or undefined concept",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFF8I4GyCn2uw5rqkAhq2Rv1QbIi3SES3Rpg&s",
  },
  {
    id: 4,
    name: "Azathoth",
    message: "An undefined concept",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTzPE6yVrVuMd4Hg57hiAcuh2okARR4piPoQ&s",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.containerHeader}>
          <View style={styles.headerLeft}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2023/07/multiverse.webp",
              }}
              style={styles.profileImage}
            />
            <View style={styles.nickname}>
              <Text style={styles.greetingText}>Hello,</Text>
              <Text style={styles.nameText}>Aditya</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={() => navigation.navigate("AddFriend")}>
              <Ionicons name="person-add" size={24} color="#f4f4f4" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerLine}>
          <View style={styles.line} />
          <Text style={styles.text}>Chats</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.content}>
          {users.map((user) => (
            <TouchableOpacity
              key={user.id}
              style={styles.chatUser}
              onPress={() => navigation.navigate("Chat")}
            >
              <Image
                source={{ uri: user.profilePic }}
                style={styles.userImage}
              />
              <View style={styles.userDetails}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userMessage}>{user.message}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "black",
    marginHorizontal: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nickname: {
    flexDirection: "column",
  },
  greetingText: {
    fontSize: 16,
    color: "white",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f4f4f4",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
  },
  chatUser: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userDetails: {
    flexDirection: "column",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  userMessage: {
    fontSize: 14,
    color: "#555",
    marginTop: 3,
  },
  containerLine: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  line: {
    borderBottomWidth: 1,
    width: "40%",
    borderColor: "#D1D5DB",
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#6B7280",
  },
});
