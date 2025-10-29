import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import NavMenu from "@/components/NavMenu";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NavMenu />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="operations" />
        <Stack.Screen name="weather" />
        <Stack.Screen name="carbon" getId={() => String(Math.random())} />
        <Stack.Screen name="guide" />
      </Stack>
    </ThemeProvider>
  );
}
