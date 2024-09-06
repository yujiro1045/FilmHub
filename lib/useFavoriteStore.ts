import { create } from "zustand";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

interface FavoriteStore {
  favorite: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movieId: number) => void;
}

const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorite: [],
  addFavorite: (movie) =>
    set((state) => ({
      favorite: [...state.favorite, movie],
    })),
  removeFavorite: (movieId) =>
    set((state) => ({
      favorite: state.favorite.filter((movie) => movie.id !== movieId),
    })),
}));

export default useFavoriteStore;
