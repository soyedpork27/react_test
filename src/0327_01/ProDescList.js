import React from 'react';

function ProDescList({deli}) {
  return (
    <>
    <li>
      <dl className="flexable">
        <dt>배송</dt>
        <dd>
          <p>{deli}</p>
          <span>23시 전 주문 시 내일 아침 7시 전 도착<br />
          &#40;대구&middot;부산&middot;울산&#41 {deli} 운영시간 별도 확인;
          </span>

        </dd>
      </dl>




    </li>
    </>
  );
}

export default ProDescList;