import React from 'react';
import dummy from './bts.json';

function Child02(  ) {
  const style = {
    width : '90px',
    height : '90px',
    margin : '10px 30px'
  }


  return (
    <>
    {dummy.bts.map(bts =>
      <li>
        <img src={`${process.env.PUBLIC_URL}/images/${bts.img}`} style={style} />
        <p>
        멤버명 : {bts.name}
        </p>
        <p>
        아이디 : {bts.id}
        </p>
        <p>
        나이 : {bts.age}
        </p>
        <p>
        이메일 : {bts.email}
        </p>
      </li>
      )}
    </>
  );
}

export default Child02;