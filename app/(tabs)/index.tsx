import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import useFetchMovies from "../../lib/useFetchMovies";
import SearchBar from "../../components/SearchBar";
import MovieCard from "../../components/MovieCard";

export default function Home() {
  const router = useRouter();

  const { filteredMovies, searchText, setSearchText, isLoading } =
    useFetchMovies();

  return (
    <>
      <Stack.Screen options={{ title: "FilmHub" }} />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.container}>
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
            {isLoading ? (
              <>
                <ActivityIndicator />
              </>
            ) : (
              filteredMovies.map((movie) => (
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
              ))
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
    alignItems: "center",
  },
});
