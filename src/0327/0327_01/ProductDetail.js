import React, {useState} from 'react';

function ProductDetail() {
  const price = 2900;


  const [num, setNum] = useState(1);

  const onDataChange = (e) => {
    setNum(e.target.value);
  }

  const onIncrease = () => {
    setNum(Number(num)+1);
  }

  const onDecrease = () => {

    if(num>=1){
      setNum(1);
    }
    else {
      setNum(Number(num)-1);
    }

  }


  return (
    <>
    <h3>동기와 비동기</h3>
    <p>동기식 - 어떤 일을 순차적으로 수행하는 것을 말함.</p>
    <p>비동기식 - 어떤 일을 비순차적으로 수행하는 것을 말함.</p>

    <p>함수형 컴포넌트는 useState 를 사용하여 상태관리를 할 수 있다.</p>
    <p>함수들은 보통 객체의 이벤트에 의해 호출되기 때문에 state 값이 비동기적입니다.</p>


    <h4>비동기 방식의 state 값 확인</h4>
    <p>+,- 버튼을 누르면 1씩 증가, 감소, 입력상자에 값을 쓰면 바로 숫자로 변경되는 콘텐츠 구현하기</p>

    <div>
      <button onClick={onDecrease}>-</button>
      <input type="text" value={num} onChange={onDataChange} />
      <button onClick={onIncrease}>+</button>
      <span>{price}</span>

    </div>
    <div>총 상품 금액 : {num*price}</div>

    </>
  );
}

export default ProductDetail;