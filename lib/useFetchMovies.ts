import { useEffect, useState } from "react";
import { API_URL, TOKEN } from "../constants";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export default function useFetchMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

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
          data.results.map((movie: Movie) => {
            console.log("poster_path:", movie.poster_path);
          });
        } else {
          console.log("No results found in data");
        }
      })
      .catch((error) => {
        console.log("Error fetching movies:", error);
      });
  }, []);

  return movies;
}
