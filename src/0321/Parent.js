import React, { Component } from 'react';
import Child02 from './Child02';
import './list.css'

class Parent extends Component {
  render() {
    const deli = '샛별배송';
    return (
      <>
        <h2>Props</h2>
      <p>Props는 컴포넌트에게 전달되는 값입니다. 이것을 통해서 같은 컴포넌트여도 결과를 다르게 볼 수 있습니다.</p>
      <p>Props는 properties &#40; 속성 &#41;의 줄임말.</p>
      <p>부모컴포넌트가 자식컴포넌트에게 전달해주는 값을 말합니다.</p>
      <p>리액트에서 props는 값을 읽기 위해서만 사용을 하고, 값을 변경하는 경우 오류가 발생한다.</p>
      <p>작성방법 : 자손컴포넌트명 속성명 = '값'</p>
      <p>자손컴포넌트에서 받을때는 &#123;	 props.속성명 &#125; 형식으로 써준다</p>

      <hr/>
      <Child02 delivery={deli} name="스무딩 플루이드" desc="설명문구" price="7,900"/>
      <hr/>
      <Child02 delivery={deli} name="오징어 숏다리" desc="설명문구" price="7,500"/>
      <hr/>
      <Child02 name="허니 로스트 피넛" desc="설명문구" price="9,900"/>
      <hr/>
      <Child02 delivery={deli} name="솜사탕 미니 케이크" desc="설명문구" price="10,900"/>
      <hr/>
      <Child02 delivery={deli} name="로양파크 장미 5대" desc="설명문구" price="15,900"/>
      <hr/>
      <Child02 delivery={deli} name="꽃보다 오징어 소프트" desc="설명문구" price="64,900"/>
      </>
    );
  }
}

export default Parent;