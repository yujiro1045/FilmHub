import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import useFetchMovies from "../../lib/useFetchMovies";
import { useMovieStore } from "../../lib/useMovieStore";
import SearchBar from "../../components/SearchBar";
import MovieCard from "../../components/MovieCard";

export default function Home() {
  const { filteredMovies, setMovies, searchText, setSearchText } =
    useMovieStore();
  const router = useRouter();

  const fetchedMovies = useFetchMovies();

  useEffect(() => {
    setMovies(fetchedMovies);
  }, [fetchedMovies, setMovies]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Stack.Screen options={{ title: "FilmHub" }} />
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
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
            />
          ))}
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
});
