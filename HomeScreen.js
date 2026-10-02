// HomeScreen.js - Screen 1: the landing page.
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Every screen in the Stack automatically receives a `navigation` prop.
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Book</Text>
      <Text style={styles.subtitle}>Simple dishes for everyday cooking.</Text>

      {/* navigation.navigate('ScreenName') moves FORWARD to that screen */}
      <Button
        title="Browse Recipes"
        onPress={() => navigation.navigate('RecipeList')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 24 },
});
