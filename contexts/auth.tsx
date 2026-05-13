import api from "@/services/api";
import { router } from "expo-router";
import React, { createContext, useState } from "react";

interface AuthContextType {
  user: {
    nome: string;
    idade?: number;
  };
  signUp: ({ nome, email, password }: userProps) => Promise<void>;
  loadingAuth: boolean;
}

type userProps = {
  nome: string;
  email: string;
  password: string;
};

export const AuthContext = createContext<AuthContextType>({
  user: { nome: "" },
  signUp: async () => {},
  loadingAuth: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loadingAuth, setLoadingAuth] = useState(false);
  async function signUp({ nome, email, password }: userProps) {
    setLoadingAuth(true);
    try {
      const response = await api.post("/users", {
        name: nome,
        email: email,
        password: password,
      });
      setLoadingAuth(false);
      router.back();
    } catch (error) {
      console.error("Deu um error: " + error);
      setLoadingAuth(false);
    }
  }
  const [user, setUser] = useState({
    nome: "Mateus Ceará",
  });
  return (
    <AuthContext.Provider value={{ user, signUp, loadingAuth }}>{children}</AuthContext.Provider>
  );
}
