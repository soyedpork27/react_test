import React from 'react';
import Child01 from './Child01';

function Bts01() {
  const bts = ['김남준','김석진','민윤기','박지민','김태형','전정국','정호석'];
  return (
    <>
      <h3>방탄소년단 데이터자료</h3>
      {/* <Child01 name={bts[0]}/> */}

      <ul>
        {bts.map( (bt,index) => <Child01 key={index} name={bt} num={index} />)}
      </ul>

      {/* 1. bts : 배열이름 */}
      {/* 2. map : 배열함수 bts 배열을 가지고 새루온 배열 생성하기 위함 */}
      {/* 3. bt : 함수명 */}
      {/* 4. <Child01 name = {bt}  /> : 배열의 개수만큼 출력하고자 하는 내용 */}

    </>
  );
}

export default Bts01;