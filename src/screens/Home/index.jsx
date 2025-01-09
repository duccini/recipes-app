import { memo } from "react";

import Title from "../../components/Title";
import Categories from "../../components/Categories";

const {
  Text,

  SafeAreaView,
} = require("react-native");

import styles from "./styles";
import Input from "../../components/Input";
import FeaturedRecipeCard from "../../components/FeaturedRecipeCard";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Input pressable onPress={() => navigation.navigate("Search")} />

      <Title text="Featured Recipes" />

      <FeaturedRecipeCard
        title="Steak with tomato sauce and bulgur rice."
        time="20 min"
        author={{
          name: "James Milner",
          image:
            "https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_4x3.jpg",
        }}
      />

      <Categories
        categories={["All", "Trending"]}
        selectedCategory="All"
        onCategoryPress={() => {}}
      />
    </SafeAreaView>
  );
};

export default memo(Home);
