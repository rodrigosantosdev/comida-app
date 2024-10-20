import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      {/* namespace de rota direto */}
      <Stack.Screen name="index" options={{ title: 'Comida App' }} />
      {/* namespace da rota por pasta */}
      <Stack.Screen name="produtos/index" options={{ title: 'Produtos' }} />
    </Stack>
  );
}
