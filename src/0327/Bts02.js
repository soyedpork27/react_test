import React from 'react';
import Child02 from './Child02';

function Bts02() {
  const bts =[
    {id : 1, name : '김남준', age : 30, email : 'aa@naver.com', img : `${process.env.PUBLIC_URL}/images/bts01.jpg`},
    {id : 2, name : '김석진', age : 32, email : 'bb@naver.com', img : `${process.env.PUBLIC_URL}/images/bts02.jpg`},
    {id : 3, name : '민윤기', age : 31, email : 'cc@naver.com', img : `${process.env.PUBLIC_URL}/images/bts03.jpg`},
    {id : 4, name : '박지민', age : 29, email : 'dd@naver.com', img : `${process.env.PUBLIC_URL}/images/bts04.jpg`},
    {id : 5, name : '김태형', age : 29, email : 'ee@naver.com', img : `${process.env.PUBLIC_URL}/images/bts05.jpg`},
    {id : 6, name : '전정국', age : 27, email : 'ff@naver.com', img : `${process.env.PUBLIC_URL}/images/bts06.jpg`},
    {id : 7, name : '정호석', age : 30, email : 'gg@naver.com', img : `${process.env.PUBLIC_URL}/images/bts07.jpg`}
  ]
  return (
    <>
      <ul>
        {/* {bts.map(bt => <Child02 key={bt.id} id={bt.id} name={bt.name} age={bt.age} email={bt.email} img={bt.img} />)} */}
        <Child02 />
      </ul>
    </>
  );
}

export default Bts02;