import { Dimensions, View } from "react-native";
import { BarChart } from "react-native-chart-kit";

interface ChartData {
  labels: string[];
  datasets: { data: number[] }[];
}

interface ChartConfig {
  widthFactor: number;
  heightFactor: number;
  yLabel: string;
}

interface ChartProps {
  data: ChartData;
  config: ChartConfig;
}

const CONFIG = {
  fillShadowGradientFromOffset: 1,
  fillShadowGradientOpacity: 1,
  color: () => "rgb(20, 130, 200)",
  labelColor: () => "white",
  decimalPlaces: 0,
  propsForLabels: {
    fontFamily: "tahoma",
    fontSize: 14,
    fontWeight: 600,
  },
};

export default function Bar(chartProps: ChartProps) {
  return (
    <View>
      <BarChart
        data={chartProps.data}
        chartConfig={CONFIG}
        width={Dimensions.get("window").width * chartProps.config.widthFactor}
        height={
          Dimensions.get("window").height * chartProps.config.heightFactor
        }
        withInnerLines={false}
        yAxisLabel=""
        yAxisSuffix={` ${chartProps.config.yLabel}`}
      />
    </View>
  );
}
