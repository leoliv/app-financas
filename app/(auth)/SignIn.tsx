import { Background } from "@/components/Background";
import { Button } from "@/components/Button";
import { CustomInput } from "@/components/CustomInput";
import { router } from "expo-router";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "right", "left"]}>
      <Background>
        <Image style={styles.img} source={require("@/assets/logo/Logo.png")} />
        <CustomInput label="E-mail" placeholder="Digite seu email" />
        <CustomInput label="Senha" placeholder="Digite sua senha" />
        <Button colorError="#3b3dbf" activeOpacity={0.7} label="Acessar" />
        <Button
          activeOpacity={0.7}
          onPress={() => router.push("/SignUp")}
          label="Criar uma conta!"
          customStyle="link"
        />
      </Background>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    marginBottom: 20,
  },
});
