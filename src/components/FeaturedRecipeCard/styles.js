import colors from "../../styles/colors";

const { StyleSheet, Dimensions } = require("react-native");

const { width } = Dimensions.get("window");

// for shadow works right, the element need background

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginTop: 46,
    marginBottom: 32,
    marginRight: 16,
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

  header: {
    flex: 1,
    height: 46,
  },

  title: {
    fontSize: 16,
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
    fontSize: 14,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-between",
  },

  authorImage: {
    width: 25,
    height: 25,
    marginRight: 8,
    borderRadius: 20,
  },

  rowContainer: {
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
