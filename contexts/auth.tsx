import React, { createContext, useState } from "react";

interface AuthContextType {
  user: {
    nome: string;
    idade?: number;
  };
}

export const AuthContext = createContext<AuthContextType>({
  user: { nome: "" },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({
    nome: "Mateus Ceará",
  });
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
