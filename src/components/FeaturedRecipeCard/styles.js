import colors from "../../styles/colors";

const { StyleSheet, Dimensions } = require("react-native");

const { width } = Dimensions.get("window");

// for shadow works right, the element need background

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 16,
    marginTop: 46,
    width: width * 0.7,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,

    borderRadius: 10,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.grey,
    flex: 1,
  },

  recipeImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginTop: -40,
  },

  footerText: {
    color: colors.lightGrey2,
    fontSize: 12,
  },

  authorImage: {
    width: 25,
    height: 25,
    marginRight: 8,
    borderRadius: 20,
  },

  author: {
    flexDirection: "row",
    alignItems: "center",
  },

  timerIcon: {
    width: 17,
    height: 17,
    marginRight: 8,
  },
});

export default styles;
