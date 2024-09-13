import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  Button,
} from "react-native";

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About FilmHub</Text>
      <Text style={styles.description}>
        FilmHub is an application that provides information about movies. You
        can search, filter, and explore a wide range of films from different
        genres.
      </Text>
      <Text style={styles.version}>Version 1.0.0</Text>

      <Text style={styles.subTitle}>Developed by:</Text>
      <Text style={styles.text}>Juan Medina</Text>

      <Button
        title="Contact Support"
        onPress={() => Linking.openURL("mailto:juanmedi730@gmail.com")}
      />

      <Text style={styles.subTitle}>Acknowledgments:</Text>
      <Text style={styles.text}>
        Special thanks to all the libraries used in the development. of this
        application.
      </Text>

      <Text style={styles.subTitle}>Legal:</Text>
      <Text style={styles.text}>
        By using this app, you agree to our{" "}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://example.com/terms")}
        >
          Terms of Service
        </Text>{" "}
        and{" "}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://example.com/privacy")}
        >
          Privacy Policy
        </Text>
        .
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
    gap: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 20,
  },
  version: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 10,
    fontWeight: "bold",
  },
  link: {
    color: "#1E90FF",
  },
});

export default AboutScreen;
