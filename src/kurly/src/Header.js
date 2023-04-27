import React from 'react';
import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <>
    <header>
        <h1>

        <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="컬리 로고 이미지" />

        </h1>
        <div>
          <p>
            마켓컬리 &#124; 뷰티컬리
          </p>
        </div>

        <nav>
          로그인
        </nav>

        <nav>

          <ul>
            <li>
              <Link to='/NewProduct/1'>
                신상품
              </Link>
            </li>
            <li>
              <Link to='/BestProduct/1'>
                베스트
              </Link>
            </li>
            <li>
              <Link to='/CheapProduct/1'>
                알뜰쇼핑
              </Link>
            </li>
            <li>
              <Link to='/SaleProduct/1'>
                특가혜택
              </Link>
            </li>
          </ul>

        </nav>

      </header>
    </>
  );
}

export default Header;