import { Dimensions, Image, Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Button from "@/components/tools/Button";
import { useState } from "react";

const CSS = StyleSheet.create({
  container: {
    zIndex: 99,
  },
  menu: {
    top: 60,
    left: 8,
    position: "fixed",
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "black",
    borderRadius: 16,
    minWidth: Dimensions.get("window").width * 0.25,
    maxHeight: Dimensions.get("window").height * 0.75,
    overflowY: "auto",
  },
  button: {
    color: "white",
    padding: 10,
    margin: 20,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: 600,
    minWidth: "5%",
    minHeight: 30,
  },
  image: {
    width: Dimensions.get("window").width * 0.03,
    height: Dimensions.get("window").width * 0.03,
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
