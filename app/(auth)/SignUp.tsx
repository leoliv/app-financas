import { Background } from "@/components/Background";
import { Button } from "@/components/Button";
import { CustomInput } from "@/components/CustomInput";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "right", "left"]}>
      <Background>
        <CustomInput label="Nome" placeholder="Digite seu nome" />
        <CustomInput label="E-mail" placeholder="Digite seu email" />
        <CustomInput label="Senha" placeholder="Digite sua senha" />
        <Button activeOpacity={0.7} label="Registrar" />
      </Background>
    </SafeAreaView>
  );
}