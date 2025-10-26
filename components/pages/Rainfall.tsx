import { useEffect, useState } from "react";
import { View } from "react-native";
import css from "@/constants/style";
import Line from "@/components/charts/ChartsLine";
import Select from "@/components/tools/SelectBox";

interface StationObject {
  station_name: string;
  station_latitude: number;
  station_longitude: number;
  station_no: number;
  station_id: number;
  itemDate: Date;
  itemValue: number;
  itemValue2: number;
  accumRange: number;
  ts_id: number;
  oldtime: number;
  id: number;
}

interface DataObject {
  Timestamp: Date;
  Value: number;
}

interface RainProps {
  widthFactor: number;
  heightFactor: number;
}

export default function Rainfall({ widthFactor, heightFactor }: RainProps) {
  const [stationArray, setStationArray] = useState<StationObject[]>([]);
  const [stationData, setStationData] = useState<DataObject[]>([]);
  const [stationID, setStationID] = useState<string>("");

  // Run on load
  useEffect(() => {
    async function getStations() {
      const res = await fetch("https://www2.sepa.org.uk/Rainfall/api/Stations");
      const output: StationObject[] = await res.json();
      setStationArray(output);
      setStationID(output[0].station_no.toString());
    }
    getStations();
  }, []);

  // Run on user selection
  useEffect(() => {
    async function getData() {
      if (stationID !== "") {
        const res = await fetch(
          `https://www2.sepa.org.uk/Rainfall/api/month/${stationID}?all=true`,
        );
        let output: DataObject[] = await res.json();
        setStationData(output);
      }
    }
    getData();
  }, [stationID]);

  return (
    <View style={css.col}>
      {stationArray.length > 0 ? (
        <Select
          optionsArray={stationArray.map((v) => v.station_name)}
          selected={null}
          setSelected={(x) =>
            setStationID(
              stationArray
                .filter((v) => v.station_name === x)[0]
                .station_no.toString(),
            )
          }
        />
      ) : null}

      {stationData.length > 0 ? (
        <Line
          {...{
            data: {
              labels: stationData.map((v, i) => {
                if (i === 0 || i % 10 === 0 || i === stationData.length - 1) {
                  return v.Timestamp.toString().replaceAll(" 20", "-");
                }
                return "";
              }),
              datasets: [{ data: stationData.map((v, _) => v.Value) }],
            },
            config: {
              widthFactor: widthFactor,
              heightFactor: heightFactor,
              yLabel: "mm",
            },
          }}
        />
      ) : null}
    </View>
  );
}
