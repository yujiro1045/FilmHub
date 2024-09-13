import { Tabs } from "expo-router";
import { FavoriteIcon, HomeIcon, InfoIcon } from "../../icons/icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, headerTitle: "Home" }}>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", tabBarIcon: () => <HomeIcon /> }}
      />
      <Tabs.Screen
        name="About"
        options={{ title: "About", tabBarIcon: () => <InfoIcon /> }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorite",
          tabBarIcon: () => <FavoriteIcon color="black" />,
        }}
      />
    </Tabs>
  );
}
