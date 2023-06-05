import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div>
      <h1>My Dashboard</h1>
      <div className="buttons">
        <Link to="/search">
          <button className="search-button">Search for Recipes</button>
        </Link>
        <Link to="/recipe-form">
          <button className="add-button">Add New Recipe</button>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard;