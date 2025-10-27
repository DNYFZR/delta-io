import css from "@/constants/style";
import { View } from "react-native";
import NavMenu from "@/components/NavMenu";
import Rainfall from "@/components/pages/Rainfall";

export default function Weather() {
  return (
    <View style={css.app}>
      <NavMenu />
      <Rainfall widthFactor={0.9} heightFactor={0.7} />
    </View>
  );
}
