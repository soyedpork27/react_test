import React, {useState, useEffect} from 'react';


function Exec() {

  const price = 2900;


  let [num, setNum] = useState(1);

  // function setNum() {
  //   if(num>=1){
  //     setNum(1);
  //   }
  //   else {
  //     setNum(num);
  //   }
  // }

  const onDataChange = (e) => {
      setNum(e.target.value);
  }

  const onIncrease = () => {
    setNum(Number(num)+1);
  }

  const onDecrease = () => {

    if(num==1){
      setNum(1);
    }
    else {
      setNum(Number(num)-1);
    }
  }


  //useEffect 함수로 동기화 작업한다.
  useEffect( () => {
    console.log(num);
  }, [num]);  // state만 호출하여 출력


  return (
    <>
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


export default Exec;