import React from 'react';
import './Header.css';
import logo from '../../images/pmp-logo-transparent.png';
import { useNavigate, Link, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const loc = useLocation();

  const handleClick = () => {
    navigate('/')
  };


  return (
    <header>
      <img className="pmp-logo" src={logo} alt="PMP logo" onClick={handleClick}/>
      <nav>
        {loc.pathname !== "/dashboard" && <Link to="/dashboard" className="header-link">Dashboard</Link>}&nbsp;&nbsp;&nbsp;
        {loc.pathname !== "/search" && <Link to="/search" className="header-link">Search</Link>}&nbsp;&nbsp;&nbsp;
      </nav>
    </header>
  )
};

export default Header;