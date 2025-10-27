import css from "@/constants/style";
import { Text, View } from "react-native";
import NavMenu from "@/components/NavMenu";
import Rainfall from "@/components/pages/Rainfall";

export default function Weather() {
  return (
    <View style={css.app}>
      <NavMenu />
      <Text style={css.heading}>SEPA Rainfall</Text>
      <Rainfall widthFactor={0.8} heightFactor={0.6} />
    </View>
  );
}
