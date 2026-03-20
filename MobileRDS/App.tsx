import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import TaskHeader from "./src/components/TaskHeader";
import TaskItem from "./src/components/TaskItem";
import ListEmpty from "./src/components/ListEmpty";

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const properties = [
    {
      id: "1",
      title: "Casa moderna com piscina",
      price: "R$ 850.000",
      location: "Campinas - SP",
    },
    {
      id: "2",
      title: "Apartamento de luxo",
      price: "R$ 1.200.000",
      location: "São Paulo - SP",
    },
  ];

  //  TELA HOME
  if (!selectedProperty) {
    return (
      <View style={styles.container}>
        <TaskHeader />

        <FlatList
          data={properties}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onRemove={() => {}}
              onPress={() => setSelectedProperty(item)}
            />
          )}
          ListEmptyComponent={<ListEmpty />}
        />
      </View>
    );
  }

  // TELA DETALHES
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setSelectedProperty(null)}>
        <Text style={styles.back}>⬅ Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{selectedProperty.title}</Text>
      <Text>{selectedProperty.location}</Text>
      <Text style={styles.price}>{selectedProperty.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: "#f5f5f5",
  },
  back: {
    marginBottom: 20,
    color: "blue",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    marginTop: 10,
    color: "green",
    fontWeight: "bold",
  },
});