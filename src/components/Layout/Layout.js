import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import './Layout.css';

function Layout() {
  const loc = useLocation();
  return (
    <div>
      <Header />
      {loc.pathname === "/" && <div className='coming-soon'>
        <h1>WELCOME TO OUR PAGE</h1>
        <h2>User Login coming soon...</h2>
      </div>}
      <Outlet />
    </div>
  )
};

export default Layout;