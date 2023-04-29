import React from 'react';

function Component(props) {
  return (
      <>
      <h2>컴포넌트의 정의</h2>
      <p>컴포넌트는 재사용이 가능한 ui로서 단순한 탬플릿 이상의 구현체이다.</p>
      <p>부모에게서 값을 받아와서 보여주거나 사용가능 &#40;props&#41;</p>
      <p>컴포넌트 자신이 사용할 값을 정의하고 필요할 때 업데이트 &#40;state&#41;</p>
      <p>UI에서 보여줘야 하는 값이 바뀌면 DOM에 변화를 줌</p>
    </>
  );
}

export default Component;