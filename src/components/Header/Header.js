import React from 'react';
import './Header.css';
import logo from '../../images/pmp-logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  };


  return (
    <header>
      <img src={logo} alt="PMP logo" onClick={handleClick}/>
    </header>
  )
};

export default Header;