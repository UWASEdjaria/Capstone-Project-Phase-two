"use client";
import { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: string | null;
  login: (name: string, callback: () => void) => void;
}

const AuthContext = createContext<AuthContextType>({ user: null, login: () => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(
    JSON.parse(localStorage.getItem("currentUser") || "null")
  );

  const login = (name: string, callback: () => void) => {
    localStorage.setItem("currentUser", JSON.stringify(name));
    setUser(name);
    callback(); // navigate after login
  };

  return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
