import css from "@/constants/style";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Icon from "@/components/tools/Icon";
import NavBar from "@/components/Navigation";
import Select from "@/components/tools/SelectBox";
import Line from "@/components/charts/ChartsLine";

interface CarbonProps {
  data: [
    {
      regionid: number;
      dnoregion: string;
      shortname: string;
      postcode: string;
      data: [
        {
          from: Date;
          to: Date;
          intensity: {
            forecast: number;
            index: string;
          };
          generationmix: [
            {
              fuel: string;
              perc: number;
            },
          ];
        },
      ];
    },
  ];
}

export default function CarbonIntensity() {
  const [selectedRegion, setSelectedRegion] =
    useState<string>("North Scotland");
  const [carbonData, setCarbonData] = useState<string>("");
  const [labels, setLables] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  // Run on user selection
  useEffect(() => {
    async function getData() {
      const regionID = selectedRegion === "North Scotland" ? 1 : 2;
      const req = await fetch(
        `https://api.carbonintensity.org.uk/regional/regionid/${regionID}`,
      );
      if (req.status === 200) {
        const data: CarbonProps = await req.json();
        if (data) {
          setCarbonData(data.data[0].data[0].intensity.index);
          setLables(data.data[0].data[0].generationmix.map((v, _) => v.fuel));
          setData(
            data.data[0].data[0].generationmix.map((v, _) => Number(v.perc)),
          );
        }
      }
    }
    getData();
  }, [selectedRegion]);

  return (
    <View style={css.app}>
      <Icon />
      <NavBar />
      <Text style={css.heading}>Fuel Mix</Text>
      <Text style={css.text}>( CO2 Intensity : {carbonData} )</Text>

      <View style={css.row}>
        <View style={css.col}>
          <Text style={css.text}>Select Grid</Text>
          <Select
            optionsArray={["North Scotland", "South Scotland"]}
            selected={selectedRegion}
            setSelected={setSelectedRegion}
          />
        </View>

        <View style={css.col}>
          <Line
            {...{
              data: {
                labels: labels,
                datasets: [{ data: data }],
              },
              config: {
                widthFactor: 0.8,
                heightFactor: 0.5,
                yLabel: "%",
              },
            }}
          />
        </View>
      </View>
    </View>
  );
}
