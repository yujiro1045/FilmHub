import { useEffect, useState } from "react";
import { API_URL, TOKEN } from "../constants";
import { useMovieStore } from "./useMovieStore";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export default function useFetchMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const { filteredMovies, setMovies, searchText, setSearchText } =
    useMovieStore();

  useEffect(() => {
    fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data && data.results) {
          setMovies(data.results as Movie[]);
          setIsLoading(false);
        } else {
          console.log("No results found in data");
        }
      })
      .catch((error) => {
        console.log("Error fetching movies:", error);
      });
  }, []);

  return { filteredMovies, searchText, setSearchText, isLoading };
}
