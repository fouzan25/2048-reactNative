import React from "react";
import { View, StyleSheet } from "react-native";
import GameHandler from "./src/Components/GameHandler";

export default function App() {
  return (
    <View style={styles.container}>
      <GameHandler />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
