import { memo } from "react";

const {
  Text,

  SafeAreaView,
} = require("react-native");

import styles from "./styles";

const Home = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default memo(Home);
