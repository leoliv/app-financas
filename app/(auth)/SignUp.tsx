import { StyleSheet, Text, View } from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Essa é a pagina de Criar uma conta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#610000",
    fontSize: 20,
  },
});
