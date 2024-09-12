import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useMovieStore } from "../lib/useMovieStore";
import useFetchMovies from "../lib/useFetchMovies";

const useMovieSearch = () => {
  const {
    filterMovies,
    movies,
    searchText,
    setMovies,
    setSearchText,
    clearSearch,
  } = useMovieStore();

  const fetchedMovies = useFetchMovies();

  useEffect(() => {
    setMovies(fetchedMovies);
  }, [fetchedMovies, setMovies]);

  useEffect(() => {
    filterMovies();
  }, [searchText, movies, filterMovies]);

  return {
    filteredMovies: useMovieStore((state) => state.filteredMovies),
    searchText,
    setSearchText,
    clearSearch,
  };
};

export default useMovieSearch;
