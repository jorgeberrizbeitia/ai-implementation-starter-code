import Navbar from "./components/Navbar"
import RecipeListPage from "./pages/RecipeListPage"
import RecipeDetailsPage from "./pages/RecipeDetailsPage"
import RecipeCreatePage from "./pages/RecipeCreatePage"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<RecipeListPage />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetailsPage />} />
        <Route path="/recipes/create" element={<RecipeCreatePage />} />
      </Routes>

    </>
  )
}

export default App
