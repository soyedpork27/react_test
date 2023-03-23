import React from 'react';

function Event01(props) {

  const onShot01 = () => {
    alert('버튼 이벤트 실행');
  }


  const onShot02 = (text) => {
    alert(text);
  }

  const test = (a, b) => {
    alert(a);
    alert(b.type);
  }

  return (
    <>
      {/* <h2>리액트 이벤트</h2>
      <p>이벤트란 사용자가 웹 브라우저에서 DOM요소들과 상호작용 하는 것입니다.</p>
      <p>리액트는 html과 동일한 이벤트를 갖습니다.</p>
      <p>이벤트는 DOM요소에만 줄 수 있고, 우리가 생성한 컴포넌트에는 줄 수 없습니다.</p>
      <p>  addEventListener(){{}}, onclick="" </p>
      <p>리액트에서는 onClick으로 작성해야한다.</p>
      <p>onClick = &#123;함수명&#125;</p>
      
      <p>함수형 컴포넌트일 경우는 onClick = &#123;함수명&#125;</p>
      <p>클래스형 컴포넌트일 경우는 onClick = this&#46;&#123;함수명&#125;</p> */}

<br/><br/>
      <button onClick={onShot01}>클릭하세요</button>
      <button onClick={() => onShot02('매개변수 입니다.')}>클릭하세요</button>
      <p>매개변수가 있을 때에는 익명함수를 추가해야 한다.</p>



      <br/>
      <br/>
      <hr />
      <br/>
      <br/>

      <p>이벤트 핸들러는 함수를 호출한 REACT 이벤트에 접근할 수 있습니다.</p>
      <button onClick={(event) => test('클릭하세요',event)}>클릭해보세요</button>
    </>
  );
}

export default Event01;