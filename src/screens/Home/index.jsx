import { memo, useContext, useEffect, useState } from "react";

import Title from "../../components/Title";
import Categories from "../../components/Categories";

const { SafeAreaView, FlatList } = require("react-native");

import { RecipesContext } from "../../context/Recipes";
import { getRecipesList } from "../../api";

import styles from "./styles";
import Input from "../../components/Input";
import HealthyRecipeCard from "../../components/HealthyRecipeCard";
import ClassifiedRecipeCard from "../../components/ClassifiedRecipeCard";

const Home = ({ navigation }) => {
  const [tagsDisplayName, setTagsDisplayName] = useState(recipes);
  const [selectedTag, setSelectedTag] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const { recipes, setRecipes, healthyRecipes, setHealthyRecipes } =
    useContext(RecipesContext);

  useEffect(() => {
    handleFetchRecipes();
    handleFetchHealthyRecipes();
  }, []);

  useEffect(() => {
    const tagsList = [];

    recipes.forEach((recipe) => {
      recipe.tags.forEach((tag) => {
        if (!tagsList.includes(tag.name)) {
          tagsList.push(tag.display_name);
        }
      });
    });

    setTagsDisplayName(tagsList);
  }, [recipes]);

  useEffect(() => {
    if (selectedTag) {
      const filteredItems = recipes.filter((recipe) => {
        const tag = recipe.tags.find((t) => t.display_name === selectedTag);
        return !!tag;
      });

      setFilteredRecipes(filteredItems);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [recipes, selectedTag]);

  const handleFetchRecipes = async () => {
    const { results } = await getRecipesList(null, "100");
    setRecipes(results);
  };

  const handleFetchHealthyRecipes = async () => {
    const { results } = await getRecipesList("healthy", "5");
    setHealthyRecipes(results);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input pressable onPress={() => navigation.navigate("Search")} />

      <Title text="Healthy Recipes" />

      <FlatList
        style={{ marginHorizontal: -24 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={healthyRecipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <HealthyRecipeCard
            handleOnPress={() => navigation.navigate("RecipeDetails", { item })}
            style={index === 0 ? { marginLeft: 24 } : null}
            title={item.name}
            time={`${Math.floor(Math.random() * 60) + 10} min`}
            image={item.thumbnail_url}
            author={
              item.credits.length
                ? {
                    name: item.credits[0].name,
                    image:
                      "https://cdn.pixabay.com/photo/2021/10/24/13/56/chef-6738187_960_720.png",
                  }
                : null
            }
          />
        )}
      />

      <Categories
        categories={tagsDisplayName}
        selectedCategory={selectedTag}
        onCategoryPress={setSelectedTag}
      />

      <FlatList
        style={{ marginHorizontal: -24 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filteredRecipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <ClassifiedRecipeCard
            handleOnPress={() => navigation.navigate("RecipeDetails", { item })}
            style={index === 0 ? { marginLeft: 24 } : null}
            title={item.name}
            time={`${Math.floor(Math.random() * 60) + 10} min`}
            image={item.thumbnail_url}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default memo(Home);
