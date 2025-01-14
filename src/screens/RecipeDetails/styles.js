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
});

export default styles;
