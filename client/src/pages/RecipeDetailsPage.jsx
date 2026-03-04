import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import service from '../services/config.services';

function RecipeDetailsPage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipe();
  }, [recipeId]);

  const fetchRecipe = async () => {
    try {
      const resp = await service.get(`/recipes/${recipeId}`);
      setRecipe(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!recipe) return <div>Loading…</div>;

  return (
    <div className='recipe-details'>
      <h1>{recipe.title}</h1>
      
      <hr />
      
      <div>
        <h2>Servings</h2>
        <p>{recipe.servings}</p>
      </div>


      <div>
        <h2>Ingredients</h2>
        <ul>
          {Array.isArray(recipe.ingredients) && recipe.ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Instructions</h2>
        <ol>
          {Array.isArray(recipe.instructions) && recipe.instructions.map((instruction, idx) => (
            <li key={idx}>{instruction}</li>
          ))}
        </ol>
      </div>

      <div>
        <h2>Dietary</h2>
        <p>Vegan: {recipe.isVegan ? 'Yes' : 'No'}</p>
        <p>Vegetarian: {recipe.isVegetarian ? 'Yes' : 'No'}</p>
        <p>Gluten Free: {recipe.isGlutenFree ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default RecipeDetailsPage;
