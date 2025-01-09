import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.lightGrey,

    paddingHorizontal: 10,

    marginVertical: 16,
  },

  input: {
    color: colors.black,
    fontSize: 14,
    flex: 1,
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
});

export default styles;
