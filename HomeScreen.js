
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { recipes } from './data';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.emoji}>🍳</Text>
      </View>

      <Text style={styles.title}>Recipe Book</Text>

      <Text style={styles.subtitle}>
        {recipes.length} simple dishes for everyday cooking.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RecipeList')}
      >
        <Text style={styles.buttonText}>
          Browse Recipes →
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  circle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#dff0ea',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },

  emoji: {
    fontSize: 64,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1d2b27',
  },

  subtitle: {
    fontSize: 16,
    color: '#5b6b66',
    marginTop: 8,
    marginBottom: 32,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#a05b07',
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
