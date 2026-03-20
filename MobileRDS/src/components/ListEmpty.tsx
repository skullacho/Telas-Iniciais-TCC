import React from "react";
import { Text, StyleSheet } from "react-native";

export default function ListEmpty() {
  return (
    <Text style={styles.text}>
      Nenhum imóvel disponível no momento 
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 50,
    color: "gray",
  },
});