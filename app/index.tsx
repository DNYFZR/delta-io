import css from "@/constants/style";
import { Text, View } from "react-native";
import NavMenu from "@/components/NavMenu";

export default function Home() {
  return (
    <View style={css.app}>
      <NavMenu />
      <Text style={css.heading}>DELTA-IO</Text>
      <Text style={css.text}>
        Use the triangle menu icon to access app data trends / user guide
      </Text>
    </View>
  );
}
