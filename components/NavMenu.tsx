import { useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

const CSS = StyleSheet.create({
  container: {
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
          <Link
            style={CSS.button}
            href={"/"}
            onPress={() => setShowMenu(!showMenu)}
          >
            Home
          </Link>

          <Link
            style={CSS.button}
            href={"/operations"}
            onPress={() => setShowMenu(!showMenu)}
          >
            Operations
          </Link>

          <Link
            style={CSS.button}
            href={"/weather"}
            onPress={() => setShowMenu(!showMenu)}
          >
            Weather
          </Link>

          <Link
            style={CSS.button}
            href={"/carbon"}
            onPress={() => setShowMenu(!showMenu)}
          >
            Carbon
          </Link>

          <Link
            style={CSS.button}
            href={"/guide"}
            onPress={() => setShowMenu(!showMenu)}
          >
            Guide
          </Link>
        </View>
      ) : null}
    </View>
  );
}
