import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  item: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.green,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  activeItem: {
    color: colors.white,
  },
  itemContainer: {
    marginRight: 12,

    marginBottom: 14,
  },
  itemContainerSelected: {
    backgroundColor: colors.green,
    borderRadius: 10,
  },
});

export default styles;
