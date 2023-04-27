import React, {useState, useRef} from 'react';
import './ref.css';

function Ref(props) {

  const [inputs, setInputs] = useState({
    password : '',
    clicked : false,
    validated : false
  });


  const {password, clicked, validated} = inputs;


  const onPassChange = (e) => {
    setInputs({
      password:e.target.value
    });
  }

  const onButtonClick = (e) => {
    e.preventDefault(); //기본 이벤트 제거
    setInputs({
      clicked : true,
      validated : password==='1234'
    });
  }


  const passwordInput = useRef();

  if (password !== '1234') {
    passwordInput.current.focus();
  }


  return (
    <>

    <h3>input 태그에 비밀번호를 입력했을때 비밀번호가 맞으면 초록색, 그렇지 않으면 주황색이 나오게 하기</h3>
    <form action="">
      <label htmlFor="pw">패스워드</label>
      <input type="password" id="pw" value={password} onChange={onPassChange} className={ clicked && ( validated ? "success" : "failure")} ref={passwordInput}/>
      <button type="submit" onClick={onButtonClick}>검증하기</button>
    </form>
    <hr />
    <p>입력하신 현재 값 {password}</p>

    </>
  );
}

export default Ref;