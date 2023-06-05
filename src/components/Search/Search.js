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
          type="text"
          size="35"
          placeholder="Cuisine -> 'Japanese', 'Italian', e.g."
          onChange={handleChange}
          name="search"
          value={cuisine}
        />
        <button type="submit" onClick={handleSubmit}>Search</button>
      </form>
    </div>
  )
};

export default Search;