import { Image, Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Button from "@/components/tools/Button";
import { useState } from "react";

const CSS = StyleSheet.create({
  container: {
    position: "fixed",
    zIndex: 99,
  },
  menu: {
    top: 60,
    left: 8,
    position: "fixed",
    borderColor: "rgb(32, 32, 32)",
    borderWidth: 2,
    backgroundColor: "rgb(20, 20, 20)",
    borderRadius: 16,
    minWidth: "30%",
    minHeight: "80%",
    maxHeight: "80%",
    overflowY: "auto",
  },
  button: {
    color: "white",
    padding: 16,
    margin: 16,
    textAlign: "center",
    fontWeight: 600,
    minWidth: "5%",
    minHeight: 30,
  },
  image: {
    width: 30,
    height: 30,
  },
  icon: {
    position: "fixed",
    top: 10,
    left: 10,
  },
});

export default function NavMenu() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <View style={CSS.container}>
      <View style={CSS.icon}>
        <Text onPress={() => setShowMenu(!showMenu)}>
          <Image
            key={"logo"}
            style={CSS.image}
            source={require("@/assets/triangle-128.png")}
          />
        </Text>
      </View>

      {showMenu ? (
        <View style={CSS.menu}>
          <Button
            name="Home"
            style={CSS.button}
            onPress={() => router.navigate("/")}
          />
          <Button
            name="Operations"
            style={CSS.button}
            onPress={() => router.navigate("/operations")}
          />
          <Button
            name="Weather"
            style={CSS.button}
            onPress={() => router.navigate("/weather")}
          />
          <Button
            name="Carbon"
            style={CSS.button}
            onPress={() => router.navigate("/carbon")}
          />
          <Button
            name="Guide"
            style={CSS.button}
            onPress={() => router.navigate("/guide")}
          />
        </View>
      ) : null}
    </View>
  );
}
