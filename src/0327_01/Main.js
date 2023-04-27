import React from 'react';
import ProductDeatil from './ProductDetail';
import ProductDeatil2 from './ProductDetail2';
import Exec from './Exec';
import ProductTitle from './ProductTitle';
import ProDescList from './ProDescList';
import ProDescList01 from './ProDescList01';
import './pro.css';

function Main() {

  const price = 2900;
  const deliver = '샛별배송';

  const title01 = '판매자';
  const ctnt01 = '컬리';
  const subctnt01 = '';

  const title02 = '포장타입';
  const ctnt02 = '(상온 종이포장)';
  const subctnt02 = '택배포장은 에코포장이 스티로폼으로 대체됩니다.';


  const title03 = '판매단위';
  const ctnt03 = '1개';
  const subctnt03 = '';


  const title04 = '중량/용량';
  const ctnt04 = '75g';
  const subctnt04 = '';


  const title05 = '원산지';
  const ctnt05 = '상품설명/상세정보';
  const subctnt05 = '';


  const title06 = '알레르기 정보';
  const ctnt06 = `-밀, 우유 포함
  -난류, 우유, 메밀, 땅콩, 대두, 밀, 토마토, 호두, 오징어 혼입 가능`;
  const subctnt06 = '';


  const title07 = '유통기한(또는 소비기한)정보';
  const ctnt07 = '수령일 포함 최소 2일 남은 제품을 보내 드립니다.';
  const subctnt07 = '';







  return (
    <>
    {/* <h3>비동기방식</h3>
      <ProductDeatil />

      <h3>동기방식</h3>
      <ProductDeatil2 /> */}

      <div className='flexable'>

      <div>
        <img src={`${process.env.PUBLIC_URL}/images/`} alt="상품 이미지" />
      </div>


<div>
      <ul>
        <ProductTitle price={price} deli={deliver}/>
        <ProDescList deli = {deliver}/>
        <ProDescList01 tit = {title01} ctnt = {ctnt01} subctnt={subctnt01}/>
        <ProDescList01 tit = {title02} ctnt = {ctnt02} subctnt={subctnt02}/>
        <ProDescList01 tit = {title03} ctnt = {ctnt03} subctnt={subctnt03}/>
        <ProDescList01 tit = {title04} ctnt = {ctnt04} subctnt={subctnt04}/>
        <ProDescList01 tit = {title05} ctnt = {ctnt05} subctnt={subctnt05}/>
        <ProDescList01 tit = {title06} ctnt = {ctnt06} subctnt={subctnt06}/>
        <ProDescList01 tit = {title07} ctnt = {ctnt07} subctnt={subctnt07}/>

      </ul>
      <Exec />
</div>
      </div>


    </>
  );
}

export default Main;