const { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required.'],
      trim: true
    },
    instructions: {
      type: [String],
    },
    ingredients: {
      type: [String],
    },
    servings: {
      type: Number,
    },
    isVegan: {
      type: Boolean,
    },
    isVegetarian: {
      type: Boolean,
    },
    isGlutenFree: {
      type: Boolean,
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;