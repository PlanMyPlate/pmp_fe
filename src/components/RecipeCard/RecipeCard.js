import React from 'react';

function RecipeCard(props) {
  return (
    <div>
      <img  src={props.image} alt={props.title} />
        <div >
          <div >{props.title}</div>
        </div>
    </div>
  );
}

export default RecipeCard;

