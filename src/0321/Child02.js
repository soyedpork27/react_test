import React from 'react';

function Child02({name, delivery, desc, price}) {
  return (
    <>
    <ul>
      <li>
        <p>
          {delivery}
        </p>
        <p>
          {name}
        </p>
        <p>
          {desc}
        </p>
        <p>
          {price}
        </p>
      </li>
    </ul>
    </>
  );
}

Child02.defaultProps={
  delivery : '일반배송',
  name : '칙촉',
  desc : '상세 설명',
  price : '0'
}

export default Child02;