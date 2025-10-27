import css from "@/constants/style";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import NavBar from "@/components/Navigation";
import Icon from "@/components/tools/Icon";
import Select from "@/components/tools/SelectBox";
import Line from "@/components/charts/ChartsLine";

// Demo data
import {
  ayrFlowData,
  gailesFlowData,
  irvineFlowData,
  ayrLevelData,
  gailesLevelData,
  irvineLevelData,
} from "@/constants/data";

export default function Operations() {
  const [selected, setSelected] = useState<string | null>(null);
  const [flowData, setFlowData] = useState(ayrFlowData);
  const [levelData, setLevelData] = useState(ayrLevelData);

  // Simulate API calls with demo data
  useEffect(() => {
    if (selected === "Ayr") {
      setFlowData(ayrFlowData);
      setLevelData(ayrLevelData);
    }

    if (selected === "Gailes") {
      setFlowData(gailesFlowData);
      setLevelData(gailesLevelData);
    }

    if (selected === "Irvine") {
      setFlowData(irvineFlowData);
      setLevelData(irvineLevelData);
    }
  }, [selected]);

  return (
    <View style={css.app}>
      <Icon />
      <NavBar />

      {/* Select Asset */}
      <View style={css.row}>
        <Text style={css.text}>Asset : </Text>
        <Select
          optionsArray={["Ayr", "Gailes", "Irvine"]}
          selected={selected}
          setSelected={setSelected}
        />
      </View>

      {/* Operational Data */}
      <View style={css.col}>
        <Text style={css.text}>Flow</Text>
        <Line
          {...{
            data: flowData,
            config: {
              widthFactor: 0.8,
              heightFactor: 0.3,
              yLabel: "l/s",
            },
          }}
        />
      </View>
      <View style={css.col}>
        <Text style={css.text}>Level</Text>
        <Line
          {...{
            data: levelData,
            config: {
              widthFactor: 0.8,
              heightFactor: 0.3,
              yLabel: "m",
            },
          }}
        />
      </View>
    </View>
  );
}
