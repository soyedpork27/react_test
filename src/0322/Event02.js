import React, { Component } from 'react';

class Event02 extends Component {
  shoot = () => {
    alert('슛~~~~');
  }
  render() {
    return (

      <>
        <h2>2. 클래스형 컴포넌트에서 이벤트 사용하기</h2>

        <button onClick={this.shoot}>눌러보세요</button>
      </>
      );
  }
}

export default Event02;