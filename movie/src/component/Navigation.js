import React from 'react';
import {Link} from 'react-router-dom';

import './css/Navigation.css';


function Navigation() {
  return (
    <div className='nav'>
      <input type="radio" id="nav_rad01" name="navi_mnu" checked/>
      <input type="radio" id="nav_rad02" name="navi_mnu" />
      <input type="radio" id="nav_rad03" name="navi_mnu" />
      <input type="radio" id="nav_rad04" name="navi_mnu" />
      <ul>
        <li><label for="nav_rad01"><Link to="/">Home</Link></label></li>
        <li><label for="nav_rad02"><Link to="/about">INTRO</Link></label></li>
        <li><label for="nav_rad03"><Link to="/sub01">SUB01</Link></label></li>
        <li><label for="nav_rad04"><Link to="/sub02">SUB01</Link></label></li>
      </ul>
    </div>
  );
}

export default Navigation;