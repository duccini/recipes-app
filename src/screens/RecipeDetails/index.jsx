import { memo } from "react";

const { SafeAreaView, Image, View, Text, ScrollView } = require("react-native");

import Title from "../../components/Title";

import styles from "./styles";

const RecipeDetails = ({ route }) => {
  const { item } = route.params || {};
  const nutrition = { ...item.nutrition };
  delete nutrition?.updated_at;
  const nutritionKeys = Object.keys(nutrition || {}); // array

  const instructions = item.instructions || {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
        <Title style={styles.title} text={item?.name} />

        {nutritionKeys.map((key) => (
          <View style={styles.row} key={key}>
            <Text style={styles.nutritionTitle}>{key.toUpperCase()}</Text>
            <Text style={styles.nutritionValue}>{nutrition[key]}</Text>
          </View>
        ))}

        <Title style={styles.title} text="Instructions" />
        {instructions.map((instruction, index) => (
          <View style={styles.instructionsRow} key={instruction.id}>
            <Text style={styles.index}>{index + 1}</Text>
            <Text style={styles.instructionsText}>
              {instruction.display_text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(RecipeDetails);
