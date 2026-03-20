import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  task: any;
  onRemove: () => void;
  onPress: () => void;
}

export default function TaskItem({ task, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.location}>{task.location}</Text>
      <Text style={styles.price}>{task.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    color: "gray",
  },
  price: {
    marginTop: 5,
    color: "green",
    fontWeight: "bold",
  },
});