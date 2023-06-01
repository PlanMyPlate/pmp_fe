import React, {useState} from 'react';

function Search() {
  const [cuisine, setCuisine] = useState('');


  const handleChange = (event) => {
    const {value} = event.target
    setCuisine(value);
  }

  const handleSubmit = () => {
    
  }

  return (
    <div>
      <h1>Search for Recipes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cuisine"
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