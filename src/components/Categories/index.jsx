/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { FlatList, Pressable, Text } from "react-native";

import styles from "./styles";

/**
 *  FlatList expect the list of items in property data
 *  will call render in each item
 *  renderItem has two arguments, item, index
 */

// OBS: View is not Pressable, Text IS !!!

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
  return (
    <FlatList
      style={{ marginHorizontal: -24, marginTop: 24 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({ item, index }) => {
        const selected = selectedCategory === item;
        return (
          <Pressable
            onPress={() => onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selected ? styles.itemContainerSelected : {},
              index === 0 ? { marginLeft: 24 } : {},
            ]}
          >
            <Text style={[styles.item, selected ? styles.activeItem : {}]}>
              {item}
            </Text>
          </Pressable>
        );
      }}
    />
  );
};

export default React.memo(Categories);
