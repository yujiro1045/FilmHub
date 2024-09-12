import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { IMAGE_URL } from "../constants";

type MovieCardProps = {
  movie: {
    id: number;
    title: string;
    poster_path: string;
  };
  onPress: () => void;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{movie.title}</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: `${IMAGE_URL}${movie.poster_path}` }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    gap: 12,
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "92%",
    marginTop: 10,
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

export default MovieCard;
