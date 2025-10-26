import { Dimensions } from "react-native";
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

export default function Bar(chartProps: ChartProps) {
  return (
    <BarChart
      data={chartProps.data}
      width={Dimensions.get("window").width * chartProps.config.widthFactor}
      height={Dimensions.get("window").height * chartProps.config.heightFactor}
      yAxisLabel=""
      yAxisSuffix={` ${chartProps.config.yLabel}`}
      chartConfig={{
        fillShadowGradient: "rgb(20, 130, 200)",
        fillShadowGradientOpacity: 1,
        color: (opacity = 1) => `rgba(64, 64, 64, ${opacity})`,
        labelColor: () => "white",
        decimalPlaces: 0,
        propsForLabels: {
          fontFamily: "tahoma",
          fontSize: 14,
          fontWeight: 600,
        },
      }}
    />
  );
}
