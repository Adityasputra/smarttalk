import { NavigationContainer } from "@react-navigation/native";
import { AuthStackScreen, StackScreen } from "./StackScreen";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function MainStack(porps) {
  const { isSignedIn, setiIsSignedIn } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {/* {isSignedIn ? <AuthStackScreen /> : <StackScreen />} */}
      <AuthStackScreen />
    </NavigationContainer>
  );
}
