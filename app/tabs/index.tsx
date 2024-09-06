import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import useFetchMovies from "../../lib/useFetchMovies";
import { IMAGE_URL } from "../../constants";
import { useMovieStore } from "../../lib/useMovieStore";

export default function Home() {
  const {
    movies,
    filteredMovies,
    setMovies,
    searchText,
    setSearchText,
    filterMovies,
  } = useMovieStore();
  const router = useRouter();

  const fetchedMovies = useFetchMovies();

  useEffect(() => {
    setMovies(fetchedMovies);
  }, [fetchedMovies, setMovies]);

  useEffect(() => {
    filterMovies();
  }, [searchText, movies, filterMovies]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Stack.Screen options={{ title: "FilmHub" }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search movies..."
            placeholderTextColor="#ccc"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          {filteredMovies.map((movie) => {
            return (
              <TouchableOpacity
                key={movie.id}
                style={styles.card}
                onPress={() => {
                  router.push({
                    pathname: "/Description",
                    params: {
                      id: movie.id,
                      title: movie.title,
                      overview: movie.overview,
                      poster_path: movie.poster_path,
                    },
                  });
                }}
              >
                <Text style={styles.title}>{movie.title}</Text>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{ uri: `${IMAGE_URL}${movie.poster_path}` }}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginBottom: 10,
    gap: 12,
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#fff" /* "rgb(30 41 59)" */,
    justifyContent: "center",
    alignItems: "center",
    width: "92%",
    marginTop: 10,
  },
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 500,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
  },
  imageContainer: {
    width: "100%",
    height: 500,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#FC2214",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 15,
  },
});
