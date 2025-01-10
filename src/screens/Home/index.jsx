import { memo, useContext, useEffect } from "react";

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
  const { recipes, setRecipes, healthyRecipes, setHealthyRecipes } =
    useContext(RecipesContext);

  useEffect(() => {
    handleFetchRecipes();
    handleFetchHealthyRecipes();
  }, []);

  const handleFetchRecipes = async () => {
    const { results } = await getRecipesList();
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
        categories={["All", "Trending"]}
        selectedCategory="All"
        onCategoryPress={() => {}}
      />

      <FlatList
        style={{ marginHorizontal: -24 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[0, 1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ index }) => (
          <ClassifiedRecipeCard
            style={index === 0 ? { marginLeft: 24 } : null}
            title="Steak with tomato sauce and bulgur rice."
            time="20 min"
            author={{
              name: "James Milner",
              image:
                "https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_4x3.jpg",
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default memo(Home);
