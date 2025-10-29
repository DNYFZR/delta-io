import { Dimensions, StyleSheet } from "react-native";

const css = StyleSheet.create({
  app: {
    overflowY: "auto",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  col: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 8,
  },
  cellHeader: {
    display: "flex",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    minWidth: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  cell: {
    display: "flex",
    minWidth: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "rgb(20, 130, 200)",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 16,
    padding: 8,
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: Dimensions.get("screen").width * 0.01,
  },
  text: {
    color: "white",
    fontSize: 14,
    fontWeight: 600,
    textAlign: "center",
    maxWidth: "90%",
    padding: 8,
  },
  selectbox: {
    backgroundColor: "black",
    color: "white",
    fontSize: 14,
    textAlign: "center",
    padding: 8,
    borderRadius: 8,
    borderColor: "black",
    minWidth: 200,
  },
  button: {
    backgroundColor: "rgb(20, 130, 200)",
    borderRadius: 8,
    padding: 6,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: 600,
    minWidth: "5%",
    minHeight: 30,
  },
});

export default css;
