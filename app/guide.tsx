import css from "@/constants/style";
import NavBar from "@/components/Navigation";
import { Text, View } from "react-native";
import Icon from "@/components/tools/Icon";

export default function UserGuide() {
  return (
    <View style={css.app}>
      <Icon />
      <NavBar />
      <Text style={css.heading}>🔥🔥🔥 DELTA-IO 🔥🔥🔥</Text>
      <Text style={css.text}>
        This application allows users to view trends from various open APIs...
      </Text>
    </View>
  );
}
