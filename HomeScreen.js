// HomeScreen.js - Screen 1: the landing page.
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { recipes } from './data';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Emoji inside a soft green circle */}
      <View style={styles.circle}>
        <Text style={styles.emoji}>🍳</Text>
      </View>

      <Text style={styles.title}>Recipe Book</Text>
      <Text style={styles.subtitle}>
        {recipes.length} simple dishes for everyday cooking.
      </Text>

      {/* navigation.navigate('ScreenName') moves FORWARD to that screen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RecipeList')}
      >
        <Text style={styles.buttonText}>Browse Recipes  →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#dff0ea',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  emoji: { fontSize: 64 },
  title: { fontSize: 34, fontWeight: 'bold', color: '#1d2b27' },
  subtitle: { fontSize: 16, color: '#5b6b66', marginTop: 8, marginBottom: 32 },
  button: {
    backgroundColor: '#a05b07',
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 30,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});