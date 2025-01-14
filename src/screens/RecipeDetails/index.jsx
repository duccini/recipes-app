import { memo } from "react";

const { SafeAreaView, Image } = require("react-native");

import Title from "../../components/Title";

import styles from "./styles";

const RecipeDetails = ({ route }) => {
  const { item } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
      <Title text={item?.name} />
    </SafeAreaView>
  );
};

export default memo(RecipeDetails);
