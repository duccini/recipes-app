import { memo } from "react";

const { SafeAreaView, Image, View, Text } = require("react-native");

import Title from "../../components/Title";

import styles from "./styles";

const RecipeDetails = ({ route }) => {
  const { item } = route.params || {};
  const nutrition = { ...item.nutrition };
  delete nutrition?.updated_at;
  const nutritionKeys = Object.keys(nutrition || {}); // array

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
      <Title style={styles.title} text={item?.name} />

      {nutritionKeys.map((key) => (
        <View style={styles.row} key={key}>
          <Text style={styles.nutritionTitle}>{key.toUpperCase()}</Text>
          <Text style={styles.nutritionValue}>{nutrition[key]}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default memo(RecipeDetails);
