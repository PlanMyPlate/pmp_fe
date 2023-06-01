import './App.css';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search'


function App() {
  return (
    <Routes>
      <Route path="/search-recipe" element={<Search />}/>
    </Routes>
  )
}

export default App;
