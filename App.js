import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import RecipeListScreen from './RecipeListScreen';
import RecipeDetailsScreen from './RecipeDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        // screenOptions applies the same header style to every screen
        screenOptions={{
          headerStyle: { backgroundColor: '#1f6f5c' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#f7f9f8' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Recipe Book' }} />
        <Stack.Screen name="RecipeList" component={RecipeListScreen} options={{ title: 'All Recipes' }} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} options={{ title: 'Recipe' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
