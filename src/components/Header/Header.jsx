import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = () => (
  <header className='Header'>
    <a href="/">
      <span className='Header__hidden-text'>Skyscanner</span>
      <img
        className='Header__logo-image'
        alt="Skyscanner"
        src={logo}
      />
    </a>
  </header>
);

export default Header;
