import { Link, Stack } from "expo-router";
import React from "react";
import { FavoriteIcon, InfoIcon } from "../icons/icons";

export default function Layout() {
  return (
    <Stack
      initialRouteName="tabs"
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerRight: () => (
          <Link href={"/tabs/favorites"}>
            <FavoriteIcon />
          </Link>
        ),
        headerLeft: () => (
          <Link href={"/tabs/About"}>
            <InfoIcon />
          </Link>
        ),
        animation: "slide_from_left",
      }}
    >
      <Stack.Screen name="tabs" />
      <Stack.Screen name="Description" />
    </Stack>
  );
}
