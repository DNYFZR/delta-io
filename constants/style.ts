import { Dimensions, StyleSheet } from "react-native";

const css = StyleSheet.create({
  app: {
    overflowY: "auto",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
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
  heading: {
    color: "white",
    textAlign: "center",
    fontWeight: 800,
    fontSize: 22,
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
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
    maxWidth: "90%",
    paddingBottom: 8,
  },
  selectbox: {
    backgroundColor: "black",
    color: "white",
    fontSize: 16,
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
