import css from "@/constants/style";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Select from "@/components/tools/SelectBox";
import Bar from "@/components/charts/ChartsBar";

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
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [carbonData, setCarbonData] = useState<string>("");
  const [labels, setLables] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  // Call API with user config
  useEffect(() => {
    async function getData() {
      const regionID = selectedRegion !== "South Scotland" ? 1 : 2;
      const req = await fetch(
        `https://api.carbonintensity.org.uk/regional/regionid/${regionID}`,
      );
      if (req.status === 200) {
        const data: CarbonProps = await req.json();
        if (data) {
          setCarbonData(data.data[0].data[0].intensity.index);
          setLables(
            data.data[0].data[0].generationmix.map((v) => v.fuel.toUpperCase()),
          );
          setData(
            data.data[0].data[0].generationmix.map((v) => Number(v.perc)),
          );
        }
      }
    }
    getData();
  }, [selectedRegion]);

  return (
    <View style={css.app}>
      <View style={css.row}>
        <Text style={css.heading}>Network Area :</Text>
        <Select
          optionsArray={["North Scotland", "South Scotland"]}
          selected={selectedRegion}
          setSelected={setSelectedRegion}
        />
      </View>

      {data.length !== 0 ? (
        <View style={css.col}>
          <Text style={css.text}>Carbon Intensity Rating : {carbonData} </Text>

          <Bar
            {...{
              data: {
                labels: labels,
                datasets: [{ data: data }],
              },
              config: {
                widthFactor: 0.9,
                heightFactor: 0.6,
                yLabel: "%",
              },
            }}
          />

          {/* Table */}
          <View style={css.row}>
            {labels.map((label, index) => (
              <View key={index} style={css.cellHeader}>
                <Text style={[css.text]}>{label}</Text>
              </View>
            ))}
          </View>

          <View style={css.row}>
            {data.map((value, index) => (
              <View key={index} style={css.cell}>
                <Text style={css.text}>{value} %</Text>
              </View>
            ))}
          </View>
        </View>
      ) : null}
    </View>
  );
}
