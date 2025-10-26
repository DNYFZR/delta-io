import css from "@/constants/style";
import { Image, Text, View } from "react-native";

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
