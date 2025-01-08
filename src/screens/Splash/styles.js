import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

const styles = StyleSheet.create({
  // background: {
  //   // width: "100%",
  //   // height: "100%",
  //   flex: 1,
  // },

  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },

  container: {
    paddingVertical: 60,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },

  text: {
    color: colors.white,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "500",
    marginTop: 24,
  },

  title: {
    color: colors.white,
    fontSize: 70,
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 24,
  },

  subtitle: {
    color: colors.white,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "400",
    marginBottom: 48,
  },
});

export default styles;
