import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="operations" options={{ headerShown: false }} />
        <Stack.Screen name="weather" options={{ headerShown: false }} />
        <Stack.Screen name="carbon" options={{ headerShown: false }} />
        <Stack.Screen name="guide" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
