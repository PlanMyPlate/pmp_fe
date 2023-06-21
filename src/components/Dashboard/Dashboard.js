import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Button from 'react-bootstrap/Button';
import Calendar from '../Calendar/Calendar';

function Dashboard() {
  return (
    <div>
      <h1 className="dashboard-title">My Dashboard</h1>
      <Calendar />
      <div className="buttons">
        <Link to="/search">
          <Button variant="info" size="sm">Search for Recipes</Button>
        </Link>
        <Link to="/recipe-form">
          <Button variant="info" size="sm">Add New Recipe</Button>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard;