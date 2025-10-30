import { Dimensions, StyleSheet } from "react-native";

const textColor = "white";
const highlightColor = "rgb(20, 130, 200)";

const css = StyleSheet.create({
  app: {
    overflowY: "auto",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 16,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // padding: 8,
  },
  col: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: 8,
  },
  heading: {
    color: highlightColor,
    textAlign: "center",
    fontWeight: 700,
    fontSize: 16,
    padding: 8,
  },
  text: {
    color: textColor,
    fontSize: 14,
    fontWeight: 600,
    textAlign: "center",
    maxWidth: "90%",
    padding: 8,
  },
  selectbox: {
    backgroundColor: "black",
    color: textColor,
    fontSize: 14,
    textAlign: "center",
    padding: 8,
    borderRadius: 8,
    minWidth: 200,
  },
  button: {
    backgroundColor: highlightColor,
    borderRadius: 8,
    padding: 6,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: 600,
    minWidth: "5%",
    minHeight: 30,
  },
  cellHeader: {
    display: "flex",
    borderBottomWidth: 1,
    borderBottomColor: textColor,
    minWidth: Dimensions.get("window").width * 0.08,
    alignItems: "center",
    justifyContent: "center",
  },
  cell: {
    display: "flex",
    minWidth: Dimensions.get("window").width * 0.08,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default css;
