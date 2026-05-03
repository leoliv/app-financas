import { router } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "right", "left"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        enabled
        style={styles.areaContainer}
      >
        <Image style={styles.img} source={require("@/assets/logo/Logo.png")} />
        <View style={styles.areaInput}>
          <TextInput style={styles.input} placeholder="Digite seu email" />
        </View>
        <View style={styles.areaInput}>
          <TextInput style={styles.input} placeholder="Digite sua senha" />
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.submitButton}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.link}
          onPress={() => router.push("/SignUp")}
        >
          <Text style={styles.linkText}>Criar uma conta!</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eff5ff",
  },
  text: {
    color: "#fd30f3",
    fontSize: 20,
    fontWeight: "bold",
  },
  img: {
    marginBottom: 20,
  },
  areaInput: { marginBottom: 15, flexDirection: "row" },
  input: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 10,
    borderRadius: 8,
    fontSize: 17,
    color: "#121212",
  },
  submitButton: {
    width: "90%",
    height: 45,
    borderRadius: 8,
    backgroundColor: "#3b3dbf",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  submitText: {
    color: "#fff",
    fontSize: 17,
  },
  link: {
    marginBottom: 10,
  },
  linkText: {
    color: "#171717",
  },
});
