import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import Button from "@/components/tools/Button";

const css = StyleSheet.create({
  nav: {
    width: "100%",
    backgroundColor: "rgb(20, 130, 200)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
  },
  button: {
    backgroundColor: "rgb(20, 130, 200)",
    borderRadius: 8,
    padding: 6,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: 600,
    minWidth: "5%",
    minHeight: 30,
  },
});

export default function NavBar() {
  const router = useRouter();

  return (
    <View style={css.nav}>
      <Button
        name="Home"
        style={css.button}
        onPress={() => router.navigate("/")}
      />
      <Button
        name="Operations"
        style={css.button}
        onPress={() => router.navigate("/operations")}
      />
      <Button
        name="Weather"
        style={css.button}
        onPress={() => router.navigate("/weather")}
      />
      <Button
        name="Carbon"
        style={css.button}
        onPress={() => router.navigate("/carbon")}
      />
      <Button
        name="Guide"
        style={css.button}
        onPress={() => router.navigate("/guide")}
      />
    </View>
  );
}
