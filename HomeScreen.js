// HomeScreen.js - Screen 1: the landing page.
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { recipes } from './data';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🍳</Text>
      <Text style={styles.title}>Recipe Book</Text>
      <Text style={styles.subtitle}>
        {recipes.length} simple dishes for everyday cooking.
      </Text>

      {/* navigation.navigate('ScreenName') moves FORWARD to that screen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RecipeList')}
      >
        <Text style={styles.buttonText}>Browse Recipes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  emoji: { fontSize: 64, marginBottom: 12 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#1d2b27' },
  subtitle: { fontSize: 16, color: '#5b6b66', marginTop: 8, marginBottom: 32 },
  button: { backgroundColor: '#1f6f5c', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
