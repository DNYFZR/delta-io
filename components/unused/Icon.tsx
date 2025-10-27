import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const css = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width * 0.025,
    height: Dimensions.get("window").width * 0.025,
  },
  icon: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 99,
  },
});

export default function Icon() {
  return (
    <View style={css.icon}>
      <Text onPress={() => window.location.reload()}>
        <Image
          key={"logo"}
          style={css.image}
          source={require("@/assets/triangle-128.png")}
        />
      </Text>
    </View>
  );
}
