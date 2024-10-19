import MainStack from "./src/navigation/MainStack";
import AuthProvider from "./src/contexts/AuthContext";

export default function App() {
  return (
    // <AuthProvider>
      <MainStack />
    // </AuthProvider>
  );
}
