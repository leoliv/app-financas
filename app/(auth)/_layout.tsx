import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function AuthLayout() {
  return (
    <>
      <StatusBar backgroundColor={"#000"} />
      <Stack>
        <Stack.Screen name="SignIn" options={{ headerShown: false }} />
        <Stack.Screen
          name="SignUp"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#3b3dbf" },
            headerTintColor: "#fff",
            headerTitle: "Voltar",
          }}
        />
      </Stack>
    </>
  );
}
