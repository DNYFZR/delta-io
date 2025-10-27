import { Dimensions, StyleSheet } from "react-native";

const css = StyleSheet.create({
  app: {
    overflowY: "auto",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  nav: {
    width: "100%",
    backgroundColor: "rgb(20, 130, 200)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
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
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
    maxWidth: "90%",
  },
  selectbox: {
    backgroundColor: "black",
    color: "white",
    fontSize: 18,
    textAlign: "center",

    borderRadius: 8,
    borderColor: "black",
    minWidth: 300,
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
  image: {
    width: Dimensions.get("window").width * 0.025,
    height: Dimensions.get("window").width * 0.025,
  },
  icon: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 99,
  },
});

export default css;
