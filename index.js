const express = require("express");
const recipes = require("./recipes");

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ info: `Hello World!` });
});

app.get("/recipes", (req, res) => {
  res.json(recipes);
});

app.get("/recipes/:id", (req, res) => {
  // Fix the route path
  const recipeId = parseInt(req.params.id);
  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ error: "Recipe not found bro " });
  }
});

app.post("/recipes", (req, res) => {
  const {
    name,
    img,
    timeToPrepare,
    ingredients,
    listOfSteps,
    cuisine,
    favorite,
  } = req.body;

  if (!name || !ingredients || !listOfSteps) {
    return res.status(400).json({ error: "Invalid recipe data" });
  }

  const newRecipe = {
    id: recipes.length + 1,
    name,
    img,
    timeToPrepare,
    ingredients,
    listOfSteps,
    cuisine,
    favorite,
  };

  recipes.push(newRecipe);
  res
    .status(201)
    .json({ message: "Recipe added successfully!", recipe: newRecipe });
});

app.listen(PORT, () =>
  console.log(`Server Running at http://localhost:${PORT}/`)
);
