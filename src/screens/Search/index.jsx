import { memo, useContext, useState } from "react";

const { SafeAreaView, FlatList } = require("react-native");

import styles from "./styles";
import Input from "../../components/Input";
import { RecipesContext } from "../../context/Recipes";
import ClassifiedRecipeCard from "../../components/ClassifiedRecipeCard";

const Search = () => {
  const { recipes } = useContext(RecipesContext);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  /**
   *  when recipes change, filteredRecipes will not change
   *
   *  WHY?
   *
   *  Becase filteredRecipes changes only with setFilteredRecipes
   *  or becase recipes is the same object??
   */

  return (
    <SafeAreaView style={styles.container}>
      <Input autoFocus />

      <FlatList
        data={filteredRecipes}
        numColumns={2}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ClassifiedRecipeCard
            title={item.name}
            time={`${Math.floor(Math.random() * 60) + 10} min`}
            image={item.thumbnail_url}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default memo(Search);
