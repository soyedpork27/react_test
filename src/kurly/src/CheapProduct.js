import React from 'react';
import {useParams} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function CheapProduct() {
  const productId = useParams().productId;
  const location = useLocation();
  return (
    <>

<h2>알뜰 쇼핑 페이지</h2>
      <p>알뜰 쇼핑 {productId}</p>
      <ul>
      <li>hash 값 표시하기 : {location.hash}</li>
        <li>pathname : {location.pathname}</li>
        <li>search : {location.search}</li>
        <li>state : {location.state}</li>
        <li>key : {location.key}</li>
      </ul>
    </>
  );
}

export default CheapProduct;