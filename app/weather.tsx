import css from "@/constants/style";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
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

export default function Weather() {
  const widthFactor = 0.9;
  const heightFactor = 0.8;
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
    function parseCustomDate(str: string) {
      const [datePart, timePart] = str.split(" ");
      const [dd, mm, yyyy] = datePart.split("/");
      const [hh, min, ss] = timePart.split(":");

      return new Date(`${yyyy}-${mm}-${dd}T${hh}:${min}:${ss}Z`);
    }

    async function getData() {
      if (stationID !== "") {
        const res = await fetch(
          `https://www2.sepa.org.uk/Rainfall/api/hourly/${stationID}?format=json`,
        );
        const output: DataObject[] = await res.json();

        const yd = Date.now() - 24 * 3600 * 1000;
        const output_24h: DataObject[] = output
          .map((v) => ({
            ...v,
            Timestamp: parseCustomDate(String(v.Timestamp)),
          }))
          .filter((v) => v.Timestamp.getTime() >= yd);
        setStationData(output_24h);
      }
    }
    getData();
  }, [stationID]);

  return (
    <View style={css.app}>
      {stationArray.length > 0 ? (
        <View style={css.row}>
          <Text style={css.heading}>Rainfall (24h) :</Text>
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
        </View>
      ) : null}
      {/*<Text style={css.text}>{JSON.stringify(stationData)}</Text>*/}
      {stationData.length > 0 ? (
        <Line
          {...{
            data: {
              labels: stationData.map((v, i) => {
                if (i === 0 || i % 6 === 0 || i === stationData.length - 1) {
                  return v.Timestamp.toLocaleTimeString(); //.slice(0, -3).split(" ")[1];
                }
                return "";
              }),
              datasets: [{ data: stationData.map((v, _) => Number(v.Value)) }],
            },
            config: {
              widthFactor: widthFactor,
              heightFactor: heightFactor,
              yLabel: "mm",
              decimalPlaces: 1,
            },
          }}
        />
      ) : null}
    </View>
  );
}
