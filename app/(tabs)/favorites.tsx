import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import useFavoriteStore from "../../lib/useFavoriteStore";
import { IMAGE_URL } from "../../constants";
import { FavoriteIcon } from "../../icons/icons";

export default function Favorites() {
  const { favorite, removeFavorite } = useFavoriteStore();

  if (favorite.length === 0) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: "Favorites", headerRight: null }} />
        <View style={styles.noMovie}>
          <Text style={styles.text}>No tienes películas favoritas</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Favorites", headerRight: null }} />
      <Text style={styles.headerText}>Mi lista de favotiros</Text>
      <FlatList
        data={favorite}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        renderItem={({ item }) => (
          <View style={styles.cardFavorite}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{ uri: `${IMAGE_URL}${item.poster_path}` }}
              />
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => removeFavorite(item.id)}>
                <FavoriteIcon color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 10,
    marginLeft: 15,
  },
  cardFavorite: {
    margin: 5,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    backgroundColor: "#fff",
    width: 350,
  },
  noMovie: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    shadowColor: "red",
    backgroundColor: "#fff",
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  imageContainer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    /* gap: 25, */
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 18,
  },
  listContent: {
    paddingHorizontal: 10,
  },
});
