import React from 'react';


function MapTest2(props) {
  // const Main = (name) => {
  //   return (<div><h3>안녕하세요. {name}입니다.</h3></div>)
  // }

  return (
    <>
      {/* <h2>안녕하세요, {props.name} 입니다.</h2> */}
      <h2>안녕하세요, {props.name} 입니다. 나이는 {props.age}입니다.</h2>

    </>
  );
}

export default MapTest2;