import React from 'react';
import MapTest from './MapTest';
import MapTest2 from './MapTest2';
import Product from './Product';

function App() {


    // const names =["명지애견동반식당","명중","명존쎄","명태구이"];

    // const names = [['전찬혁' , 30] , ['갱재민', 25] , ['맹지애',29.3]];

    // const names = [
    // {username : '전찬혁', age : 30},
    // {username : '갱재민', age : 25},
    // {username : '맹지애', age : 29.3}
    // ]

    // const nameList = names.map((name) => (<MapTest2 name={name}/>))

    // const nameList = names.map(
    //   (v) => (
    //     <MapTest2 name={v[0]} age={v[1]}/>
    //   )
    // )

    // const nameList = names.map(
    //   (v) => (
    //     <MapTest2 name={v[0]} age={v[1]}/>
    //   )
    // )


  return (
    <>
      {/* <MapTest /> */}
      {/* <hr /> */}
      {/* <MapTest2/> */}
      {/* <MapTest2 key={v.username} name={v.username} age={v.age} /> */}

      {/* <div>{nameList}</div> */}


      <Product />
    </>
  );
}

export default App;