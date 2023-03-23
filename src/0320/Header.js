import React from 'react';

import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <>
      <header>
        <h1><Link to='/'>로고</Link></h1>

        <nav>
          <ul>

            <li><Link to='/'>메인페이지</Link></li>

            <li><Link to='/map'>맵페이지</Link></li>
            
            <li><Link to='/Component'>컴포넌트 설명 보기</Link></li>

            <li><Link to='/App'>CSS 서식 설명 보기</Link></li>

          </ul>
        </nav>

      </header>
    </>
  );
}

export default Header;