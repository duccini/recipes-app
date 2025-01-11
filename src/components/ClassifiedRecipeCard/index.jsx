import { memo } from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const ClassifiedRecipeCard = ({ title, time, image, style }) => {
  return (
    <View style={[styles.container, style]}>
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
    </View>
  );
};

export default memo(ClassifiedRecipeCard);
