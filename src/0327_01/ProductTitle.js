import React from 'react';

function ProductTitle({price, deli}) {
  return (
    <>
      <li>
        <span className="gray deliver">{deli}</span>
        <h2>&#91;그녀의 빵공장&#93; 소금빵</h2>
        <span className="gray">고소하고 짭쪼름한 소금빵</span>
        <p><span className='price'>{price}</span>원</p>
        <span className='purple'>로그인 후 적립 혜택이 제공됩니다.</span>
      </li>
    </>
  );
}

export default ProductTitle;