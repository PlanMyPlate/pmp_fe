import React from 'react';
import './Header.css';
import logo from '../../images/pmp-logo.png';
import { useNavigate, Link } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  };


  return (
    <header>
      <img class="pmp-logo" src={logo} alt="PMP logo" onClick={handleClick}/>
      <nav>
        <Link to="/dashboard" className="header-link">Dashboard</Link>
      </nav>
    </header>
  )
};

export default Header;