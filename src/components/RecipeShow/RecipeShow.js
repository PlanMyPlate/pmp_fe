import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeShow() {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch(`${process.env.REACT_APP_MOCK_SERVER_URL}/recipes/${id}/information`);
        const data = await response.json();
        setRecipe(data);
        console.log(recipe);
      } catch(error) {
        console.error(error)
      }
      setIsLoading(false);
    };
    fetchData();
    }, [id, recipe]);

  return (
    <div>
      {isLoading ? (<p>Loading...</p>) : (
      <div>
        <h2>{recipe.title}</h2>
        <p>{recipe.readyInMinutes}</p>
        <img src={recipe.image} alt={recipe.title}/>
        <p>{recipe.servings}</p>
        <p>{recipe.sourceUrl}</p>
        {recipe.extendedIngredients.map(ing => {
          return(
            <p>{ing.originalName}</p>
          )
        })}
        {/* <p>{recipe.analyzedInstructions}</p> */}
      </div>
      )}
    </div>
  )
};

export default RecipeShow;