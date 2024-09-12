import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { FC } from "react";

type IconProps = {
  iconName?: "favorite" | "favorite-border" | "home";
  size?: number;
  color?: string;
};

export const InfoIcon: FC<IconProps> = (props) => (
  <FontAwesome name="info-circle" size={28} color="black" {...props} />
);

export const SettingsIcon: FC<IconProps> = (props) => (
  <Ionicons name="settings-outline" size={28} color="black" {...props} />
);

export const FavoriteIcon: FC<IconProps> = ({ color, size = 24, iconName }) => {
  switch (color) {
    case "red":
      iconName = "favorite";
      break;
    case "blue":
      iconName = "favorite";
      break;
    case "black":
      iconName = "favorite";
      break;
    default:
      iconName = "favorite-border";
      break;
  }

  return <MaterialIcons name={iconName} size={size} color={color} />;
};

export const RecommendedIcon: FC<IconProps> = (props) => (
  <AntDesign name="play" size={24} color="black" {...props} />
);

export const SearchIcon: FC<IconProps> = (props) => (
  <AntDesign name="search1" size={24} color="black" {...props} />
);

export const HomeIcon: FC<IconProps> = (props) => (
  <Entypo name="home" size={28} color="black" {...props} />
);

export const CancelIcon: FC<IconProps> = (props) => (
  <MaterialIcons name="cancel" size={24} color="black" {...props} />
);
