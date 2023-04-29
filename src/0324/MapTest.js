import React from 'react';

function MapTest() {
  const numbers = [1,3,5];

  const listItems =numbers.map((number, index) => {
    console.log(number);
  });

  const days = ['일','월','화','수','목','금','토'];
  let sDays = days.map(day => `별 ${day}`);
  console.log(sDays);

  const smile = day => `웃어 ${day}`
  sDays = days.map(smile);
  console.log(sDays);



  const numbers2 = [4,9,16,25,36];
  let result = numbers2.map(Math.sqrt);
  console.log(result);

  result = numbers2.map((number) => number*=2);
  console.log(result);


  const students = [
    {id : 1, name : '전찬혁'},
    {id : 2, name : '강재민'},
    {id : 3, name : '명지애'}
  ];

  let names = students.map(student => student.name);
  console.log(names);



  return (
    <>
      <h3>Map함수 사용하기</h3>
      <p>map함수는 기존의 배열의 값을 새로운 배열에 담아 만드는 기능을 한다.</p>
      <p>array.map(콜백함수 (현재 배열값, 배열 내 현재값 인덱스, 현재배열), 함수 내에서 this로 사용될 값)</p>
    </>
  );
}

export default MapTest