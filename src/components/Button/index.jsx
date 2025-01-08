import { memo } from "react";

const { Pressable, Text, Image } = require("react-native");

import styles from "./styles";

const Button = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Image
        source={require("../../../assets/rightArrow.png")}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default memo(Button);
