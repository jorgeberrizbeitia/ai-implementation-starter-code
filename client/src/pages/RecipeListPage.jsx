import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import service from '../services/config.services';

function RecipeListPage() {
  
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await service.get("/recipes");
      setRecipes(response.data);
    } catch (error) {
      console.log(error)
    }
  };

  if (!recipes) return <div>Loading…</div>;

  return (
    <div>
      <h1>Recipes</h1>
      <ul className="recipe-list">
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe._id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeListPage;