import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,

    flex: 1,
  },

  thumbnail: {
    width: width - 48,
    height: 300,

    borderRadius: 10,

    marginBottom: 24,
  },

  title: {
    marginBottom: 12,
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
});

export default styles;
