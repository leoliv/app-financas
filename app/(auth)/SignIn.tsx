import { StyleSheet, Text, View } from "react-native";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Essa é a pagina de Veronica</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#01415a",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fd30f3",
    fontSize: 20,
    fontWeight: "bold",
  },
});
