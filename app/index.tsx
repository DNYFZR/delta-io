import css from "@/constants/style";
import { Dimensions, Image, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={css.app}>
      <Text style={css.heading}>DELTA-IO</Text>
      <View style={{ paddingTop: Dimensions.get("screen").height * 0.03 }}>
        <Image
          style={{
            width: Dimensions.get("screen").width * 0.4,
            height: Dimensions.get("screen").height * 0.5,
            borderRadius: 16,
          }}
          source={require("@/assets/dial-io.jpg")}
        />
      </View>
    </View>
  );
}
