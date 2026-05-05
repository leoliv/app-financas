import { Background } from "@/components/Background";
import { Button } from "@/components/Button";
import { CustomInput } from "@/components/CustomInput";
import { AuthContext } from "@/contexts/auth";
import { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  const { user } = useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "right", "left"]}>
      <Background>
        <CustomInput label="Nome" placeholder="Digite seu nome" />
        <CustomInput label="E-mail" placeholder="Digite seu email" />
        <CustomInput label="Senha" placeholder="Digite sua senha" />
        <Button
          onPress={() => console.log(user)}
          activeOpacity={0.7}
          label="Registrar"
        />
      </Background>
    </SafeAreaView>
  );
}
