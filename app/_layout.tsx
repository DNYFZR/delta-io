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
        <Stack.Screen name="index" getId={({ params }) => String(Date.now())} />
        <Stack.Screen
          name="operations"
          getId={({ params }) => String(Date.now())}
        />
        <Stack.Screen
          name="weather"
          getId={({ params }) => String(Date.now())}
        />
        <Stack.Screen
          name="carbon"
          getId={({ params }) => String(Date.now())}
        />
        <Stack.Screen name="guide" getId={({ params }) => String(Date.now())} />
      </Stack>
    </ThemeProvider>
  );
}
