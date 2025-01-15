import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,

    flex: 1,

    paddingBottom: 32,
  },

  thumbnail: {
    width: width - 48,
    height: 300,

    borderRadius: 10,
  },

  title: {
    marginBottom: 12,
    marginTop: 24,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(212, 217, 217, 0.5)",
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  nutritionTitle: {
    textTransform: "capitalize",
  },

  nutritionValue: {
    color: "rgba(0,0,0,0.45)",
  },

  instructionsRow: {
    flexDirection: "row",

    alignItems: "center",

    marginVertical: 8,
  },

  index: {
    fontSize: 20,
    color: colors.grey2,
    marginRight: 16,
  },

  instructionsText: {
    fontSize: 14,
    color: colors.black,
    flex: 1,
  },
});

export default styles;
