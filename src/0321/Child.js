import React from 'react';

function Child(props) {
  const userName = '대기리보이';
  let jumsu = prompt('점수를 입력하세요');
  return (
    <>
      <h2>React JSX문법 익히기</h2>
      <p>JSX는 JAVASCRIPT XML의 약자로서 리액트에서 UI를 표현하고자 할 때 사용하는 문법이다.</p>
      <p>자바스크립트의 확장문법이며, XML언어와 비슷함</p>
      <p>장점 : html코드 작성법과 비슷하기 때문에 보기 쉽고 익숙하다. 컴포넌트들도 html 태그를 쓰듯이 그냥 작성하여 활용도가 높다.</p>
      <ul>
        <li>태그는 최상위 요소로 감싸야 한다. 빈 요소로 감싸는 것이 좋다.</li>
        <li>반드시 태그는 닫혀있어야 한다.</li>
        <li>JSX 표현식 = &#123; 변수속성 &#125;</li>
        <li>조건부 렌더링 - &#40; 조건식 &#41; 	&#63; &#40; 참인 경우 &#41; &#58; &#40; 거짓인 경우 &#41; </li>
        <li>리액트에서 CSS 적용하는 방법 7가지</li>
        <li>외부스타일 서식 적용하기</li>
      </ul>



      <p>표현식 작성하기</p>
      <p>환영합니다. {userName}님</p>
        {alert('환영합니다.')}

        <p>삼항조건연산자를 사용하여 연산식 만들기<br />
          {jumsu >= 60? (<strong>합격</strong>) : (<strong>불합격</strong>)}
        </p>

    </>
  );
}

export default Child;