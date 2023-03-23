import React, {useState} from 'react';
import './login.css';

function Login(props) {
 const [inputs, setInputs] = useState({
  userid: '',
  userpw: ''
 });

 // 비구조화 할당 방식을 통해 값을 추출한다.
 const {userid, userpw} = inputs;

 // 값이 변경되는 함수 - 타겟 대상은 2개 
 const onDataChange = (e) => {
  const{value, name} = e.target;
  setInputs({
   ...inputs, // 기존 input 객체를 복사한다.
   [name]:value // name키를 가진 값을 value로 설정한다.
  })
 }

 return (
  <>
   <article>
    <h3>로그인</h3>
    <input type="text" name='userid' placeholder='아이디를 입력해주세요' value={userid} onChange={onDataChange}/>
    <input type="password" name='userpw' placeholder='비밀번호를 입력해주세요' value={userpw} onChange={onDataChange} />
    
    <div className='findbox'>
    <span>아이디 찾기 </span>
    <span>| 비밀번호 찾기</span>
    </div>

    <button>로그인</button>
    <button>회원가입</button>
   
   <div>
    <h4>입력한 id : {userid} </h4>
    <h4>입력한 pw : {userpw} </h4>
   </div>
   </article>


  </>
 );
}

export default Login;