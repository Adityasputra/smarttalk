import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";

// Context Imports
import { AuthContext } from "../contexts/AuthContext";

// Stack Screen Imports
import { AuthStackScreen, StackScreen } from "./StackScreen";

export default function MainStack(porps) {
  const { isSignedIn, setiIsSignedIn } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {/* {isSignedIn ? <AuthStackScreen /> : <StackScreen />} */}
      <AuthStackScreen />
    </NavigationContainer>
  );
}
