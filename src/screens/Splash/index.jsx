import { memo } from "react";

const {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Image,
} = require("react-native");

import styles from "./styles";
import Button from "../../components/Button";

const Splash = ({ navigation, onPress }) => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../../assets/splash.png")}
      >
        <View onPress={onPress} style={styles.container}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.text}>100K+ Premium Recipes</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>{`Get 
Cooking`}</Text>
          <Text style={styles.subtitle}>Simple way to find Tasty Recipe</Text>
          <Button onPress={() => navigation.navigate("Home")}>
            Star Cooking
          </Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default memo(Splash);
