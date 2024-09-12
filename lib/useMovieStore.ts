import { create } from "zustand";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

interface MovieStore {
  movies: Movie[];
  searchText: string;
  filteredMovies: Movie[];
  setMovies: (movies: Movie[]) => void;
  setSearchText: (text: string) => void;
  filterMovies: () => void;
  clearSearch: () => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  searchText: "",
  filteredMovies: [],
  setMovies: (movies) =>
    set((state) => {
      const updatedState = { ...state, movies };
      updatedState.filteredMovies = updatedState.movies.filter((movie) =>
        movie.title.toLowerCase().includes(state.searchText.toLowerCase())
      );
      return updatedState;
    }),
  setSearchText: (text) =>
    set((state) => {
      const updatedState = { ...state, searchText: text };
      updatedState.filteredMovies = updatedState.movies.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      );
      return updatedState;
    }),
  filterMovies: () =>
    set((state) => ({
      filteredMovies: state.movies.filter((movie) =>
        movie.title.toLowerCase().includes(state.searchText.toLowerCase())
      ),
    })),

  clearSearch: () =>
    set((state) => ({
      searchText: "",
      filteredMovies: state.movies,
    })),
}));
