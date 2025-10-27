import { Dimensions, StyleSheet } from "react-native";

const css = StyleSheet.create({
  app: {
    overflowY: "auto",
    overflowX: "hidden",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
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
    fontSize: 24,
    padding: 2,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
    padding: 8,
    textAlign: "center",
  },
  selectbox: {
    backgroundColor: "black",
    color: "white",
    fontSize: 18,
    textAlign: "center",
    padding: 12,
    borderRadius: 8,
    borderColor: "black",
    minWidth: 100,
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
