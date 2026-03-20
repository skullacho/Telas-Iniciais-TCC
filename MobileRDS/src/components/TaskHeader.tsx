import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TaskHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Angar Imóveis</Text>
      <Text style={styles.subtitle}>
        Encontre o imóvel ideal 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: "gray",
  },
});