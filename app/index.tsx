import css from "@/constants/style";
import { Text, View } from "react-native";

import NavBar from "@/components/Navigation";
import Icon from "@/components/tools/Icon";

export default function Home() {
  return (
    <View style={css.app}>
      <Icon />
      <NavBar />
      <Text style={css.heading}>DELTA-IO</Text>
    </View>
  );
}
