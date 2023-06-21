import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeShow() {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
        const data = await response.json();
        setRecipe(data);
        console.log(recipe);
      } catch(error) {
        console.error(error)
      }
      setIsLoading(false);
    };
    fetchData();
    }, [id]);

  return (
    <div>
      {isLoading ? (<p>Loading...</p>) : (
      <h1>{recipe.title}</h1>
      )}
    </div>
  )
};

export default RecipeShow;