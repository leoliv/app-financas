import api from "@/services/api";
import { router } from "expo-router";
import React, { createContext, useState } from "react";

interface AuthContextType {
  user: {
    nome: string;
    idade?: number;
  };
  signUp: ({ nome, email, password }: userProps) => Promise<void>;
}

type userProps = {
  nome: string;
  email: string;
  password: string;
};

export const AuthContext = createContext<AuthContextType>({
  user: { nome: "" },
  signUp: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  async function signUp({ nome, email, password }: userProps) {
    try {
      const response = await api.post("/users", {
        name: nome,
        email: email,
        password: password,
      });
      router.back();
    } catch (error) {
      console.error("Deu um error: " + error);
    }
  }
  const [user, setUser] = useState({
    nome: "Mateus Ceará",
  });
  return <AuthContext.Provider value={{ user, signUp }}>{children}</AuthContext.Provider>;
}
