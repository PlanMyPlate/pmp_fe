import React, {useState} from 'react';
import './Search.css';

function Search() {
  const [cuisine, setCuisine] = useState('');


  const handleChange = (event) => {
    const {value} = event.target
    setCuisine(value);
  }

  const handleSubmit = () => {

  }

  return (
    <div className="search-form">
      <h1>Search for Recipes</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="cuisine-search"
          type="text"
          size="35"
          placeholder="Cuisine, Diet, or Ingredients..."
          onChange={handleChange}
          name="search"
          value={cuisine}
        />
        <button className="search-recipe-button" type="submit" onClick={handleSubmit}>Search</button>
      </form>
    </div>
  )
};

export default Search;