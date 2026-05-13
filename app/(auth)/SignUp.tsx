import { Background } from "@/components/Background";
import { Button } from "@/components/Button";
import { CustomInput } from "@/components/CustomInput";
import { AuthContext } from "@/contexts/auth";
import { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  const { signUp } = useContext(AuthContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "right", "left"]}>
      <Background>
        <CustomInput
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
          placeholder="Digite seu nome"
        />
        <CustomInput
          label="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Digite seu email"
        />
        <CustomInput
          label="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          placeholder="Digite sua senha"
        />
        <Button
          onPress={() => signUp({ nome, email, password })}
          activeOpacity={0.7}
          label="Registrar"
        />
      </Background>
    </SafeAreaView>
  );
}
