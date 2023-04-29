import React, {useRef} from 'react';
import FoodChild from './FoodChild';

function Food(props) {
  const food = [
    {
      id : 'f01',
      name : '낙곱새',
      price : 6000,
      kind : '중식'
    },
    {
      id : 'f02',
      name : '김치찌개',
      price : 7000,
      kind : '한식'
    },
    {
      id : 'f03',
      name : '설렁탕',
      price : 10000,
      kind : '한식'
    },
    {
      id : 'f04',
      name : '피자',
      price : 8000,
      kind : '이태리'
    },
    {
      id : 'f05',
      name : '돈까스',
      price : 6000,
      kind : '경양식'
    }
  ]










  const nextId = useRef(6);

  const onCreate = () => {
    nextId.current += 1;
  }

  console.log(nextId);


  return (
    <>
      <FoodChild foods={food}/>
    </>
  );
}

export default Food;