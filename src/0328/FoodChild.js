import React from 'react';

function FoodChild({foods}) {
  return (
    <>
      {
      foods.map(food => <FoodData food={food} key={food.id} />)
      }
    </>
  );
}




function FoodData({food}) {
  return(
    <>
    <br />
  <p>{food.name}</p>
  <p>{food.price}</p>
  <p>{food.kind}</p>
    </>
  )
}



export default FoodChild;