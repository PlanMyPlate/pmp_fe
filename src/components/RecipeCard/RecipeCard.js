import React from 'react';

function RecipeCard(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.id}</p>
      <img src={props.image} alt={props.title}></img>
    </div>
  );
}

export default RecipeCard;

