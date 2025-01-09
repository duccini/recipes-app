import { memo } from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const ClassifiedRecipeCard = ({ title, time, image, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.recipeImage}
        source={{
          uri: "https://www.allrecipes.com/thmb/qq9s8jlKplKUDEo3Gtk15EAJpHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-24700-churros-VAT-hero-03-4x3-a7f6af1860934b0385f84ab9f13f2613.jpg",
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
