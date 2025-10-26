import css from "@/constants/style";
import { View } from "react-native";
import { useRouter } from "expo-router";
import Button from "@/components/tools/Button";

export default function NavBar() {
  const router = useRouter();

  return (
    <View style={css.nav}>
      <Button
        name="Home"
        style={css.button}
        onPress={() => router.navigate("/")}
      />
      <Button
        name="Operations"
        style={css.button}
        onPress={() => router.navigate("/operations")}
      />
      <Button
        name="Weather"
        style={css.button}
        onPress={() => router.navigate("/weather")}
      />
      <Button
        name="Carbon"
        style={css.button}
        onPress={() => router.navigate("/carbon")}
      />
      <Button
        name="Guide"
        style={css.button}
        onPress={() => router.navigate("/guide")}
      />
    </View>
  );
}
