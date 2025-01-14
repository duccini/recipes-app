import { memo } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";

const ClassifiedRecipeCard = ({ title, time, image, style, handleOnPress }) => {
  return (
    <Pressable onPress={handleOnPress} style={[styles.container, style]}>
      <Image
        style={styles.recipeImage}
        source={{
          uri: image,
        }}
      />

      <Text numberOfLines={3} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.textLabel}>Time</Text>
      <Text style={styles.textValue}>{time}</Text>
    </Pressable>
  );
};

export default memo(ClassifiedRecipeCard);
