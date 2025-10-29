import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import Head from "expo-router/head";
import { Tabs } from "expo-router";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Head>
        <title>DELTA-IO</title>
      </Head>
      <Tabs
        screenOptions={{
          tabBarIconStyle: { display: "none" },
          headerShown: false,
        }}
      >
        <Tabs.Screen name="index" options={{ title: "HOME" }} />
        <Tabs.Screen name="operations" options={{ title: "PROCESS" }} />
        <Tabs.Screen name="weather" options={{ title: "WEATHER" }} />
        <Tabs.Screen
          name="carbon"
          options={{ title: "ENERGY" }}
          // getId={() => String(Date.now())}
        />
        <Tabs.Screen name="guide" options={{ title: "GUIDE" }} />
      </Tabs>
    </ThemeProvider>
  );
}
