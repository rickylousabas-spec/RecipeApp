// RecipeDetailsScreen.js - Screen 3: reads the params and has a custom Back button.
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// `route.params` contains whatever object the previous screen passed in.
export default function RecipeDetailsScreen({ route, navigation }) {
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.label}>Cooking time</Text>
      <Text style={styles.text}>{recipe.time}</Text>
      <Text style={styles.label}>Description</Text>
      <Text style={styles.text}>{recipe.description}</Text>
      <Text style={styles.label}>Ingredients</Text>
      <Text style={styles.text}>{recipe.ingredients}</Text>

      {/* navigation.goBack() manually returns to the previous screen */}
      <Button title="Back to list" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '600', color: '#888', marginTop: 12 },
  text: { fontSize: 16, marginBottom: 4 },
});
