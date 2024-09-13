import { Link, Stack } from "expo-router";
import React from "react";
import { FavoriteIcon, InfoIcon } from "../icons/icons";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        title: "FilmHub",
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerRight: () => (
          <Link href={"/favorites"}>
            <FavoriteIcon />
          </Link>
        ),
        headerLeft: () => (
          <Link href={"/About"}>
            <InfoIcon />
          </Link>
        ),
        animation: "slide_from_left",
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="Description" />
    </Stack>
  );
}
