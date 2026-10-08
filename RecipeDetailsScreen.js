// RecipeDetailsScreen.js - Screen 3: reads the params and has custom buttons.
import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

// `route.params` contains whatever object the previous screen passed in.
export default function RecipeDetailsScreen({ route, navigation }) {
  const { recipe } = route.params;

  // Simple local state: true when the user taps the favorite button
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.emoji}>{recipe.emoji}</Text>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.meta}>
        {recipe.time} • Serves {recipe.servings} • {recipe.difficulty}
      </Text>

      {/* Toggles between saved / not saved */}
      <TouchableOpacity
        style={[styles.favButton, isFavorite && styles.favButtonActive]}
        onPress={() => setIsFavorite(!isFavorite)}
      >
        <Text style={[styles.favText, isFavorite && styles.favTextActive]}>
          {isFavorite ? '♥ Saved' : '♡ Save recipe'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.label}>Description</Text>
      <Text style={styles.text}>{recipe.description}</Text>

      <Text style={styles.label}>Ingredients</Text>
      {recipe.ingredients.map((item) => (
        <Text key={item} style={styles.text}>• {item}</Text>
      ))}

      <Text style={styles.label}>Steps</Text>
      {recipe.steps.map((step, index) => (
        <Text key={index} style={styles.text}>{index + 1}. {step}</Text>
      ))}

      {/* navigation.goBack() manually returns to the previous screen */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to list</Text>
      </TouchableOpacity>

      {/* navigate('Home') jumps straight back to the Home screen */}
      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.linkText}>Go to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  emoji: { fontSize: 56, textAlign: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginTop: 8, color: '#1d2b27' },
  meta: { textAlign: 'center', color: '#5b6b66', marginTop: 4, marginBottom: 12 },
  favButton: {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1f6f5c',
  },
  favButtonActive: { backgroundColor: '#1f6f5c' },
  favText: { color: '#1f6f5c', fontWeight: '600' },
  favTextActive: { color: '#fff' },
  label: { fontSize: 14, fontWeight: '600', color: '#1f6f5c', marginTop: 16, marginBottom: 4 },
  text: { fontSize: 16, color: '#1d2b27', lineHeight: 24 },
  button: { backgroundColor: '#1f6f5c', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 28 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  linkButton: { padding: 14, alignItems: 'center' },
  linkText: { color: '#1f6f5c', fontSize: 16 },
});
