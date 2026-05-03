import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* 'index' é o seu arquivo app/index.tsx */}
      <Stack.Screen name="index" />

      {/* Aqui você referencia o GRUPO, não a tela interna dele */}
      <Stack.Screen name="(auth)" />

      {/* Aqui você referencia o grupo das abas */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
