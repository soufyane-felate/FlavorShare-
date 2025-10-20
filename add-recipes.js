const fs = require('fs');

// Read the current database
const db = JSON.parse(fs.readFileSync('./data/db.json', 'utf8'));

// Add more recipes
const newRecipes = [
  {
    "title": "Classic Margherita Pizza",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "description": "A traditional Italian pizza with fresh tomatoes, mozzarella cheese, and basil. Perfect for a family dinner.",
    "satars": 5,
    "date": new Date().toISOString(),
    "price": 120,
    "categorie": "Main Course",
    "id": "pizza123"
  },
  {
    "title": "Chocolate Lava Cake",
    "image": "https://images.unsplash.com/photo-1623047027440-767e2bacd5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "description": "Decadent chocolate cake with a molten center, served with vanilla ice cream. A perfect dessert for special occasions.",
    "satars": 5,
    "date": new Date().toISOString(),
    "price": 80,
    "categorie": "Dessert",
    "id": "cake456"
  },
  {
    "title": "Fresh Garden Salad",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "description": "Crisp mixed greens with cherry tomatoes, cucumber, and carrots, tossed in a light vinaigrette dressing.",
    "satars": 4,
    "date": new Date().toISOString(),
    "price": 60,
    "categorie": "Vegetarian",
    "id": "salad789"
  },
  {
    "title": "Grilled Salmon with Lemon",
    "image": "https://images.unsplash.com/photo-1606901574335-2701958d6df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "description": "Fresh Atlantic salmon fillet grilled to perfection and topped with a zesty lemon butter sauce.",
    "satars": 5,
    "date": new Date().toISOString(),
    "price": 180,
    "categorie": "Seafood",
    "id": "salmon101"
  },
  {
    "title": "Mushroom Risotto",
    "image": "https://images.unsplash.com/photo-1597402881370-32a8e516e6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "description": "Creamy Italian risotto cooked with a variety of wild mushrooms and finished with parmesan cheese.",
    "satars": 4,
    "date": new Date().toISOString(),
    "price": 110,
    "categorie": "Vegetarian",
    "id": "risotto202"
  },
  {
    "title": "Berry Smoothie Bowl",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "description": "A refreshing blend of mixed berries topped with granola, coconut flakes, and fresh fruit.",
    "satars": 4,
    "date": new Date().toISOString(),
    "price": 55,
    "categorie": "Breakfast",
    "id": "smoothie303"
  }
];

// Add the new recipes to the database
db.post = [...db.post, ...newRecipes];

// Write the updated database back to the file
fs.writeFileSync('./data/db.json', JSON.stringify(db, null, 2));

console.log('Successfully added 6 new recipes to the database!');