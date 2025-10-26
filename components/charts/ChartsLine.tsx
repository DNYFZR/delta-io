import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

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

export default function Line(chartProps: ChartProps) {
  return (
    <LineChart
      data={chartProps.data}
      width={Dimensions.get("window").width * chartProps.config.widthFactor}
      height={Dimensions.get("window").height * chartProps.config.heightFactor}
      withInnerLines={false}
      withOuterLines={false}
      yAxisLabel=""
      yAxisSuffix={` ${chartProps.config.yLabel}`}
      chartConfig={{
        backgroundColor: "black",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "2",
          strokeWidth: "2",
          stroke: "blue",
        },
      }}
      bezier={true}
      style={{
        marginVertical: 8,
        borderRadius: 12,
      }}
    />
  );
}
