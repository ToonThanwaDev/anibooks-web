import { createContext } from "react";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
