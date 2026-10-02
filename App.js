// App.js - the "router". Registers every screen in one Stack Navigator.
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import RecipeListScreen from './RecipeListScreen';
import RecipeDetailsScreen from './RecipeDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer holds the navigation state for the whole app
    <NavigationContainer>
      {/* The first Screen listed is the one shown at startup */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="RecipeList"
          component={RecipeListScreen}
          options={{ title: 'All Recipes' }}
        />
        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetailsScreen}
          options={{ title: 'Recipe' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
