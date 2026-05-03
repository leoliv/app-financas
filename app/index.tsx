import { Redirect } from "expo-router";
// Exemplo simplificado no seu app/index.tsx
export default function Index() {
  const signed = false;
  if (!signed) {
    return <Redirect href="/(auth)/SignIn" />;
  }
  return <Redirect href="/(tabs)" />;
}
