import React, {useState} from 'react';
import './Search.css';
import RecipeCard from '../RecipeCard/RecipeCard'

function Search() {
  const [formData, setFormData] = useState(
    {
      cuisine: "",
      diet: "",
      includeIngredients: "",
      minProtein: "",
      maxProtein: "",
      minCarbs: "",
      maxCarbs: "",
      minCalories: "",
      maxCalories: "",
      minFiber: "",
      maxFiber: "",
      minSugar: "",
      maxSugar: ""
    }
  );

  const [searchedRecipes, setSearchedRecipes] = useState([])


  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    });
  }

  async function fetchData() {
    const response = await window.fetch("https://08d2cfed-d53a-4f17-8dea-f78653f8e300.mock.pstmn.io/search?query=chicken", {
      method: 'GET'
    })
    const jsonData = await response.json();
    setSearchedRecipes(jsonData.results)
  };

  const handleSubmit = e => {
    e.preventDefault()
    fetchData()
  }

  const allRecipes = searchedRecipes.map(recipe => {
    return (
      <RecipeCard 
        key={recipe.id}
        {...recipe}
      />
    )
  })

  return (
    <div className="search-form">
      <h1>Search for Recipes</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cuisine"
          onChange={handleChange}
          name="cuisine"
          value={formData.cuisine}
        />

        <input
          type="text"
          placeholder="Diet"
          onChange={handleChange}
          name="diet"
          value={formData.diet}
        />

        <input
          type="text"
          placeholder="Ingredients"
          onChange={handleChange}
          name="includeIngredients"
          value={formData.includeIngredients}
        /><br></br><br></br>


        {/* CARBS */}
        <input
          class="input-number"
          type="number"
          min="0"
          max="100"
          size="10"
          placeholder="Min Carbs"
          onChange={handleChange}
          name="minCarbs"
          value={formData.minCarbs}
        />
        <input
          class="input-number"
          type="number"
          min="0"
          max="500"
          size="10"
          placeholder="Max Carbs"
          onChange={handleChange}
          name="maxCarbs"
          value={formData.maxCarbs}
        />

        {/* CALORIES */}
        <input
          class="input-number"
          type="number"
          min="0"
          max="100"
          size="10"
          placeholder="Min Calories"
          onChange={handleChange}
          name="minCalories"
          value={formData.minCalories}
        />
        <input
          class="input-number"
          type="number"
          min="0"
          max="500"
          size="10"
          placeholder="Max Calories"
          onChange={handleChange}
          name="maxCalories"
          value={formData.maxCalories}
        />

        {/* PROTEIN */}
        <input
          class="input-number"
          type="number"
          min="0"
          max="100"
          size="10"
          placeholder="Min Protein"
          onChange={handleChange}
          name="minProtein"
          value={formData.minProtein}
        />
        <input
          class="input-number"
          type="number"
          min="0"
          max="500"
          size="10"
          placeholder="Max Protein"
          onChange={handleChange}
          name="maxProtein"
          value={formData.maxProtein}
        />

        {/* FIBER */}
        <input
          class="input-number"
          type="number"
          min="0"
          max="100"
          size="10"
          placeholder="Min Fiber"
          onChange={handleChange}
          name="minFiber"
          value={formData.minFiber}
        />
        <input
          class="input-number"
          type="number"
          min="0"
          max="500"
          size="10"
          placeholder="Max Fiber"
          onChange={handleChange}
          name="maxFiber"
          value={formData.maxFiber}
        />

        {/* SUGAR */}
        <input
          class="input-number"
          type="number"
          min="0"
          max="100"
          size="10"
          placeholder="Min Sugar"
          onChange={handleChange}
          name="minSugar"
          value={formData.minSugar}
        />
        <input
          class="input-number"
          type="number"
          min="0"
          max="500"
          size="10"
          placeholder="Max Sugar"
          onChange={handleChange}
          name="maxSugar"
          value={formData.maxSugar}
        />


        <button className="search-recipe-button" type="submit" onClick={handleSubmit}>Search</button>
      </form>
      <div class="recipe-list">
        {allRecipes}
      </div>
    </div>
  )
};

export default Search;