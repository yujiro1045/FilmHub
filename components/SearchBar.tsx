import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

type SearchBarProps = {
  searchText: string;
  setSearchText: (text: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText }) => {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder="Search movies..."
      placeholderTextColor="#ccc"
      value={searchText}
      onChangeText={(text) => setSearchText(text)}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchInput: {
    width: "60%",
    height: 40,
    backgroundColor: "#fff",
    color: "#000",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20,
  },
});
