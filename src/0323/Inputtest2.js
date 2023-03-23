import React, { useState }  from 'react';

function Inputtest2(props) {
 const style = {

  width: '500px',
  padding: '10px',
  margin: '10px',
  border: '3px solid #000',
  background: '#ff0'

 }

 const [inputs, setInputs] = useState({
  username: '',
  userid: ''
 });

 // 비구조화 할당 방식을 통해 값을 추출한다.
 const {username, userid} = inputs;

 // 값이 변경되는 함수 - 타겟 대상은 2개 
 const onDataChange = (e) => {
  const{value, name} = e.target;
  setInputs({
   ...inputs, // 기존 input 객체를 복사한다.
   [name]:value // name키를 가진 값을 value로 설정한다.
  })
 }

 const onDataReset = () => {
  setInputs({
   username: '',
   userid: ''
  })
 }
 return (
  <>
   <h2>여러개의 입력상자를 사용한 값관리</h2>
   <p>여러 input 사용 시 사용될 속성 name, value</p>
   <p>e.target.value // 이벤트를 받는 타겟의 value값</p>
   <p>e.target.name // 이벤트를 받는 타겟의 name값</p>

   <div style={style}>
    <input type="text" placeholder='이름을 입력하세요' name='username' value={username} onChange={onDataChange}/>
    <input type="text" placeholder='아이디를 입력하세요' name='userid' value={userid} onChange={onDataChange}/>
    
    <button onClick={onDataReset}>데이터 리셋</button>
    <p>값 : {username},({userid})</p>
   </div>
  </>
 );
}

export default Inputtest2;