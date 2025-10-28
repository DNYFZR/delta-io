import css from "@/constants/style";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import NavMenu from "@/components/NavMenu";
import Select from "@/components/tools/SelectBox";
// import Line from "@/components/charts/ChartsLine";
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
          setLables(
            data.data[0].data[0].generationmix.map((v, _) =>
              v.fuel.toUpperCase(),
            ),
          );
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
      <NavMenu />

      <View style={css.col}>
        <View style={css.row}>
          <Text style={css.text}>Network Area :</Text>
          <Select
            optionsArray={["North Scotland", "South Scotland"]}
            selected={selectedRegion}
            setSelected={setSelectedRegion}
          />
        </View>

        {data.length > 0 ? (
          <Bar
            {...{
              data: {
                labels: labels,
                datasets: [{ data: data }],
              },
              config: {
                widthFactor: 0.9,
                heightFactor: 0.7,
                yLabel: "%",
              },
            }}
          />
        ) : null}
        <Text style={css.text}>Carbon Intensity Rating : {carbonData} </Text>
      </View>
    </View>
  );
}
