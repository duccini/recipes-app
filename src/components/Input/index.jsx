import { memo } from "react";

const { Pressable, Text, Image, View, TextInput } = require("react-native");

import styles from "./styles";
import colors from "../../styles/colors";

const Input = ({
  style,
  showSearchIcon = true,
  placeholder = "Search recipe",
  pressable,
  onPress,
  ...props
}) => {
  const renderInput = () => (
    <View style={[styles.container, style]}>
      {showSearchIcon ? (
        <Image
          style={styles.icon}
          source={require("../../../assets/search.png")}
        />
      ) : null}
      <TextInput
        {...props}
        editable={!pressable}
        placeholderTextColor={colors.lightGrey}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );

  if (pressable) {
    return <Pressable onPress={onPress}>{renderInput()}</Pressable>;
  }

  return renderInput();
};

export default memo(Input);
