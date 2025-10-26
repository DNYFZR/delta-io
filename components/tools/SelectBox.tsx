import css from "@/constants/style";
import { Picker } from "@react-native-picker/picker";

interface SelectProps {
  optionsArray: any[];
  selected: string | null;
  setSelected: (value: string) => void;
}

export default function Select({
  optionsArray,
  selected,
  setSelected,
}: SelectProps) {
  return (
    <Picker
      style={css.selectbox}
      selectedValue={selected}
      onValueChange={(itemValue) => (itemValue ? setSelected(itemValue) : null)}
    >
      {optionsArray.map((v, i) => (
        <Picker.Item key={i} label={v} value={v} />
      ))}
    </Picker>
  );
}
