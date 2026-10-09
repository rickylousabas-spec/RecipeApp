// RecipeListScreen.js - Screen 2: shows the list and sends the tapped item onward.
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { recipes } from './data';

export default function RecipeListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{recipes.length} recipes</Text>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            // The 2nd argument of navigate() is the PARAMS object sent to the next screen
            onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}
          >
            <View style={styles.emojiCircle}>
              <Text style={styles.emoji}>{item.emoji}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.meta}>{item.time} • Serves {item.servings}</Text>
              <Text style={styles.badge}>{item.difficulty}</Text>
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
  count: { color: '#5b6b66', marginBottom: 12, fontWeight: '600' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  emojiCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#dff0ea',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  emoji: { fontSize: 28 },
  info: { flex: 1 },
  name: { fontSize: 18, fontWeight: '600', color: '#1d2b27' },
  meta: { color: '#5b6b66', marginTop: 4 },
  badge: {
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#dff0ea',
    color: '#1f6f5c',
    fontSize: 12,
    fontWeight: '600',
    overflow: 'hidden',
  },
  arrow: { fontSize: 28, color: '#9aa8a3' },
});
