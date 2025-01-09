const { StyleSheet, Dimensions } = require("react-native");

const { width } = Dimensions.get("window");

import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: "rgba(212, 217, 217, 0.5)",
    padding: 12,

    width: width * 0.4,
    marginTop: 60,
    marginRight: 16,
    marginVertical: 32,
  },

  recipeImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -70,
    alignSelf: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.grey,
    textAlign: "center",
    marginVertical: 12,
  },

  textLabel: {
    color: colors.grey,
    fontSize: 12,
  },

  textValue: {
    color: colors.black,
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default styles;
