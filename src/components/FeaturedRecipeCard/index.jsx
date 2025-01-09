import { memo } from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";
import Rating from "../Rating";

const FeaturedRecipeCard = ({ author, title, image, rating, time, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.rowContainer}>
        <View style={styles.header}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>

          <Rating rating={3.4} />
        </View>
        <Image
          style={styles.recipeImage}
          source={{
            uri: "https://www.allrecipes.com/thmb/qq9s8jlKplKUDEo3Gtk15EAJpHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-24700-churros-VAT-hero-03-4x3-a7f6af1860934b0385f84ab9f13f2613.jpg",
          }}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.rowContainer}>
          <Image style={styles.authorImage} source={{ uri: author.image }} />
          <Text style={styles.footerText}>By {author.name}</Text>
        </View>

        <View style={styles.rowContainer}>
          <Image
            style={styles.authorImage}
            source={require("../../../assets/timer.png")}
          />
          <Text style={styles.footerText}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(FeaturedRecipeCard);
