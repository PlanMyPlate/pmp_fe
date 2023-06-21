import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeShow() {
  const {id} = useParams();

  return (
    <div>
      <h1>hehehe</h1>
    </div>
  )
};

export default RecipeShow;