import React, { useState } from 'react';
import './RecipeForm.css'

function RecipeForm() {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    imageUrl: '', 
    favorite: false
  });

  const updateMe = (key, value) => {
    setRecipe((prevRecipe) => ({ ...prevRecipe, [key]: value }))
  }

  function handleChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    updateMe(name, value);
  }

  const handleSubmit = (e) => {

  };

  return (
    <div>
      <h1>Add a Recipe</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="name"
          placeholder="Name of Recipe"
          onChange={handleChange}
          value={recipe.name}
        /><br></br>
        <textarea
          type="textarea"
          rows="5"
          cols="30"
          name="ingredients"
          placeholder="Ingredients"
          onChange={handleChange}
          value={recipe.ingredients}
        /><br></br>
        <textarea
          type="textarea"
          rows="5"
          cols="30"
          name="instructions"
          placeholder="Instructions"
          onChange={handleChange}
          value={recipe.instructions}
        /><br></br>
        <input
          type="text"
          name="imageUrl"
          size="25"
          placeholder="Image URL from Google"
          onChange={handleChange}
          value={recipe.imageUrl}
        /><br></br>
        <button className="add-recipe-button" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
};

export default RecipeForm;