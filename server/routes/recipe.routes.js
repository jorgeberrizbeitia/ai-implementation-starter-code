const router = require("express").Router();

const Recipe = require("../models/Recipe.model");

// GET /api/recipes
router.get("/", async (req, res, next) => {
  try {
    const allRecipes = await Recipe.find().select("title");
    res.json(allRecipes);
  } catch (error) {
    next(error)
  }
});

// GET /api/recipes/:recipeId
router.get("/:recipeId", async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId);
    res.json(recipe);
  } catch (error) {
    next(error)
  }
});

// POST /api/recipes
router.post("/", async (req, res, next) => {
  try {
    const newRecipe = await Recipe.create({
      title: req.body.title,
      instructions: req.body.instructions,
      ingredients: req.body.ingredients,
      servings: req.body.servings,
      isVegan: req.body.isVegan,
      isVegetarian: req.body.isVegetarian,
      isGlutenFree: req.body.isGlutenFree
    });
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error)
  }
});

module.exports = router;
