import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Dashboard from './components/Dashboard/Dashboard'
import Recipes from './components/Recipes/Recipes'
import RecipeShow from './components/RecipeShow/RecipeShow'
import RecipeForm from './components/RecipeForm/RecipeForm'
import Search from './components/Search/Search'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeShow />} />
        <Route path="/recipe-form" element={<RecipeForm />}/>
        <Route path="/search" element={<Search />}/>
      </Route>
    </Routes>
  )
}

export default App;
