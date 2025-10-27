import css from "@/constants/style";
import { Text, View } from "react-native";

import NavBar from "@/components/Navigation";
import Icon from "@/components/tools/Icon";
import Rainfall from "@/components/pages/Rainfall";

export default function Weather() {
  return (
    <View style={css.app}>
      <Icon />
      <NavBar />
      <Text style={css.heading}>SEPA Rainfall</Text>
      <Rainfall widthFactor={0.8} heightFactor={0.6} />
    </View>
  );
}
