import { memo } from "react";

const {
  Text,

  SafeAreaView,
} = require("react-native");

import styles from "./styles";
import Input from "../../components/Input";

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input />
    </SafeAreaView>
  );
};

export default memo(Search);
