import { memo } from "react";
import { Image, Pressable } from "react-native";

const ReturnButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Image
        style={{ width: 30, height: 30, margin: 16 }}
        source={require("../../../assets/leftArrow.png")}
      />
    </Pressable>
  );
};

export default memo(ReturnButton);
