import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { IMAGE_URL } from "../constants";
import { FavoriteIcon } from "../icons/icons";
import useFavoriteStore from "../lib/useFavoriteStore";

type DescriptionParams = {
  id?: number;
  overview?: string;
  title?: string;
  poster_path?: string;
};

export default function Description() {
  const params = useLocalSearchParams();
  const { id, overview, title, poster_path } = params as DescriptionParams;
  const { addFavorite, favorite, removeFavorite } = useFavoriteStore();

  const isFavorite = favorite.some((fav) => fav.id === id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite({ id, overview, poster_path, title });
    }
  };

  if (!id || !title || !poster_path) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No movie details</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: `${IMAGE_URL}${poster_path}` }}
            />
          </View>
          <View style={styles.card1}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity onPress={toggleFavorite}>
                <View style={styles.icon}>
                  <FavoriteIcon color={isFavorite ? "red" : "gray"} />
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.overview}>{overview}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 8,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: 350,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card1: {
    width: 200,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  titleContainer: {
    borderRadius: 15,
    width: "132%",
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    shadowColor: "red",
    elevation: 4,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  icon: { padding: 5 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    padding: 10,
  },
  errorText: {
    color: "#fff",
  },
  overview: {
    fontSize: 16,
    textAlign: "justify",
    color: "#000",
  },
  imageContainer: {
    width: 214,
    height: 294,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#FC2214",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 15,
  },
  image: {
    width: 214,
    height: 294,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
  },
});
