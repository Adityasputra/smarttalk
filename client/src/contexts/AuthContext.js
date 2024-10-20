import { createContext, useState } from "react";

export const AuthContext = createContext({
  isSignedIn: false,
  setIsSignedIn: () => {},
});

export default function authContext({ children }) {
  const [isSignedIn, setiIsSignedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
