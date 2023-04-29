import React from 'react';
import './Header.css';
import Navigation from './component/Navigation';

function Header(props) {
  return (
      <header>
        <h1>
          <img src={`${process.env.PUBLIC_URL}/images/logo_YTS.svg`} alt="로고 이미지" />
        </h1>

        <Navigation />

      </header>
  );
}

export default Header;