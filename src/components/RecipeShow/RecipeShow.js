import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeShow() {
  const {id} = useParams();

  return (
    <div>
      {Number(id) === 1 ? <h1>Recipe Show</h1> : <h1>Not 1 ID</h1>}
    </div>
  )
};

export default RecipeShow;