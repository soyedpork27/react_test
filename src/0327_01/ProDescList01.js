import React from 'react';

function ProDescList01({tit, ctnt, subctnt}) {
  return (
    <li>
      <dl className='flexable'>
        <dt>{tit}</dt>
        <dd><p>{ctnt}</p>{subctnt}</dd>
      </dl>
    </li>
  );
}

export default ProDescList01;