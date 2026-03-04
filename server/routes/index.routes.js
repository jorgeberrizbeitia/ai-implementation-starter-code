const router = require("express").Router();

// ℹ️ Organize and connect all your route files here.
const recipeRouter = require("./recipe.routes");
router.use("/recipes", recipeRouter);

module.exports = router;
