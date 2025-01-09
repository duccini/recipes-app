import { memo } from "react";
import { Image, View } from "react-native";

import styles from "./styles";

const Rating = ({ rating }) => {
  // 0 - 1.4 = 1 star
  // 1.5 - 2.4 = 2 stars
  // 2.5 - 3.4 = 3 starts
  // 3.5 - 4.4 = 4 stars
  // 4.5 - 5 = 5 stars

  const arr = [1, 2, 3, 4, 5];

  const renderStars = () => {
    return arr.map((star) => {
      if (Math.round(rating) >= star) {
        return (
          <Image
            style={styles.star}
            source={require("../../../assets/fullStar.png")}
          />
        );
      }

      return (
        <Image
          style={styles.star}
          source={require("../../../assets/emptyStar.png")}
        />
      );
    });
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

export default memo(Rating);
