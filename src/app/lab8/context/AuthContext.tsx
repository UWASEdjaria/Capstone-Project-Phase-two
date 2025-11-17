"use client";
import { createContext, useContext, useState } from "react";

interface AuthContextType { user: string | null; login: (name: string, cb: () => void) => void; }
const AuthContext = createContext<AuthContextType>({ user: null, login: () => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const login = (name: string, cb: () => void) => { setUser(name); cb(); };
  return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
