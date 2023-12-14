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
  const recipeId = parseInt(req.params.id);
  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ error: "Recipe not found bro " });
  }
});

app.listen(PORT, () =>
  console.log(`Server Running at http://localhost:${PORT}/`)
);
