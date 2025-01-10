import { memo } from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";
import Rating from "../Rating";

const HealthyRecipeCard = ({ author, title, image, time, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.rowContainer}>
        <View style={styles.header}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>

          <Rating rating={Math.floor(Math.random() * 5) + 2} />
        </View>
        <Image
          style={styles.recipeImage}
          source={{
            uri: image,
          }}
        />
      </View>

      <View style={styles.footer}>
        {author ? (
          <View style={styles.rowContainer}>
            <Image style={styles.authorImage} source={{ uri: author.image }} />
            <Text style={styles.footerText}>By {author.name}</Text>
          </View>
        ) : (
          <View /> // null iria quebrar o layout
        )}

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

export default memo(HealthyRecipeCard);
