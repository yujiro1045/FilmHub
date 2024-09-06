import {
  View,
  Text,
  Animated,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useRef } from "react";
import { useMovieStore } from "../lib/useMovieStore";
import { IMAGE_URL } from "../constants";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function Slider() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const router = useRouter();

  const { movies } = useMovieStore();

  return (
    <View style={styles.sliderContainer}>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {movies.map((movie) => (
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
            <Image
              style={styles.image}
              source={{ uri: `${IMAGE_URL}${movie.poster_path}` }}
            />
          </TouchableOpacity>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    width,
    height: 500,
  },
  card: {
    marginBottom: 10,
    gap: 12,
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#fff" /* "rgb(30 41 59)" */,
    justifyContent: "center",
    alignItems: "center",
    width,
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
    width: "90%",
    height: 400,
    borderRadius: 10,
  },
});
