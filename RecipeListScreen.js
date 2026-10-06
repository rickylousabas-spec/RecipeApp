// RecipeListScreen.js - Screen 2: shows the list and sends the tapped item onward.
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { recipes } from './data';

export default function RecipeListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            // The 2nd argument of navigate() is the PARAMS object sent to the next screen
            onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.meta}>{item.time} • Serves {item.servings}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e3eae7',
  },
  emoji: { fontSize: 32, marginRight: 14 },
  info: { flex: 1 },
  name: { fontSize: 18, fontWeight: '600', color: '#1d2b27' },
  meta: { color: '#5b6b66', marginTop: 4 },
  arrow: { fontSize: 28, color: '#9aa8a3' },
});
