// data.js - hardcoded mock data (no backend needed).
export const recipes = [
  {
    id: '1',
    emoji: '🍗',
    name: 'Chicken Adobo',
    time: '45 min',
    servings: 4,
    difficulty: 'Easy',
    category: 'Main Dish',
    description: 'Chicken simmered in soy sauce, vinegar, garlic, and bay leaves.',
    ingredients: ['Chicken', 'Soy sauce', 'Vinegar', 'Garlic', 'Bay leaves', 'Peppercorns'],
    steps: [
      'Mix chicken, soy sauce, vinegar, garlic, and peppercorns in a pot.',
      'Add bay leaves and bring to a boil.',
      'Lower the heat and simmer for 30 minutes until tender.',
    ],
  },
  {
    id: '2',
    emoji: '🍜',
    name: 'Pancit Canton',
    time: '30 min',
    servings: 3,
    difficulty: 'Medium',
    category: 'Main Dish',
    description: 'Stir-fried noodles with vegetables and sliced meat.',
    ingredients: ['Canton noodles', 'Cabbage', 'Carrots', 'Pork', 'Soy sauce', 'Garlic'],
    steps: [
      'Sauté garlic and pork until cooked.',
      'Add carrots and cabbage and stir-fry for 3 minutes.',
      'Add noodles and soy sauce, then toss until well mixed.',
    ],
  },
  {
    id: '3',
    emoji: '🍌',
    name: 'Banana Cue',
    time: '15 min',
    servings: 2,
    difficulty: 'Easy',
    category: 'Snack',
    description: 'Deep-fried saba bananas coated in caramelized brown sugar.',
    ingredients: ['Saba bananas', 'Brown sugar', 'Cooking oil'],
    steps: [
      'Heat oil in a pan.',
      'Fry the bananas and sprinkle brown sugar over them.',
      'Cook until the sugar caramelizes, then skewer and serve.',
    ],
  },
  {
    id: '4',
    emoji: '🥟',
    name: 'Turon',
    time: '20 min',
    servings: 4,
    difficulty: 'Easy',
    category: 'Snack',
    description: 'Crispy spring rolls filled with banana and jackfruit.',
    ingredients: ['Saba bananas', 'Jackfruit', 'Spring roll wrappers', 'Brown sugar', 'Cooking oil'],
    steps: [
      'Roll banana and jackfruit in brown sugar, then wrap in a spring roll wrapper.',
      'Fry in hot oil until golden and crispy.',
      'Drain on paper towels and serve warm.',
    ],
  },
];

// The categories shown as buttons on the Home screen
export const categories = ['All', 'Main Dish', 'Snack'];