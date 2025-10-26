// // This code is correct - the API has no CORS support
// import { useEffect, useState } from "react";
// import { Text, View } from "react-native";
// import css from "@/constants/style";

// export default function Overflows() {
//   const [overflowData, setOverflowData] = useState<any>(null);

//   // Run on load
//   useEffect(() => {
//     async function getData() {
//       if (overflowData === null) {
//         const res = await fetch(
//           "https://api.scottishwater.co.uk/overflow-event-monitoring/v1/near-real-time",
//           {
//             method: "GET",
//             headers: {
//               Accept: "application/json",
//               "Cache-Control": "max-age=3600, public",
//               "Access-Control-Allow-Origin": "*",
//               "Content-Type": "application/json",
//             },
//             cache: "no-store",
//           },
//         );
//         if (res.ok) {
//           const data = await res.json();
//           setOverflowData(data);
//         } else {
//           setOverflowData(res.status);
//         }
//       }
//     }
//     getData();
//   }, [overflowData]);

//   return (
//     <View>
//       <Text style={css.text}>{JSON.stringify(overflowData)}</Text>
//     </View>
//   );
// }
