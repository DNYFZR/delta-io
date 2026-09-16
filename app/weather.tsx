import css from "@/constants/style";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import Line from "@/components/charts/ChartsLine";
import Select from "@/components/tools/SelectBox";

interface StationObject {
  station_name: string;
  station_no: string;
  station_id: string;
  station_latitude: string;
  station_longitude: string;
}

interface DataObject {
  Timestamp: string;
  Value: number;
}

interface DataResponse {
  ts_id: string;
  rows: string;
  columns: string;
  data: string[];
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
      const apiCall = await fetch("https://timeseries.sepa.org.uk/KiWIS/KiWIS?request=getStationList&stationgroup_id=279593&format=json");
      let res: string[][] = await apiCall.json();
      res = res.slice(1);

      let output: StationObject[] = res.map(arr => {
        return Object({
          "station_name" : arr[0],
          "station_no": arr[1],
          "station_id": arr[2],
          "station_latitude": arr[3],
          "station_longitude": arr[4],
        })
      });
      setStationArray(output);
      setStationID(output[0].station_no);
    }
    getStations();
  }, []);

  // Run on user selection
  useEffect(() => {
    async function getData() {
      if (stationID !== "") {
        const callApi = await fetch(
          `https://timeseries.sepa.org.uk/KiWIS/KiWIS?request=gettimeseriesvalues&ts_path=1/${stationID}/RE/Hour.Total&period=P1D&format=json`
        );
        const res: DataResponse[] = await callApi.json();

        if(Number(res[0].rows) > 0){
          let output: DataObject[] = res[0].data.map(arr => {
            return Object({
              "Timestamp" : new Date(arr[0]).toLocaleTimeString(),
              "Value": arr[1],
            })
          });

          setStationData(output);
        } else {
          setStationData([])
        }
      }
    }
    getData();
  }, [stationID]);

  return (
    <View style={css.app}>
      {stationArray.length > 0 ? (
        <View style={css.row}>
          <Text style={css.heading}>Rainfall (24h) : </Text>
          <Select
            optionsArray={stationArray.map((v) => v.station_name)}
            selected={null}
            setSelected={(x) =>
              setStationID(
                stationArray
                  .filter((v) => v.station_name === x)[0].station_no,
              )
            }
          />
        </View>
      ) : null}

      {stationData.length > 0 ? (
        <Line
          {...{
            data: {
              labels: stationData.map((v, i) => {
                if (i === 0 || i % 3 === 0 || i === stationData.length - 1) {
                  return v.Timestamp;
                }
                return "";
              }),
              datasets: [{ data: stationData.map((v, _) => Number(v.Value)) }],
            },
            config: {
              widthFactor: widthFactor,
              heightFactor: heightFactor,
              yLabel: "mm",
              decimalPlaces: 2,
            },
          }}
        />
      ) : <Text style={css.text}>No Data Available For Selected Station...</Text>}
    </View>
  );
}
