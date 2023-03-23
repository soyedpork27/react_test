import './App.css';
import './Style.css';
import styles from './test.module.css';

function App() {

  // 서식 객체 작성하기
  const style01 = {backgroundColor : '#ccc'};


  return (
    <>
    <h2>리액트에서 css 서식 적용하는 방법</h2>
    <ol>
      <li>자바스크립트에서 표현식을 통한 서식적용</li>
      <li>변수로 서식을 적용하기</li>
      <li>외부스타일 서식적용하기 - import</li>
      <li>className을 통해 연결하기</li>
      <li>css module 방식으로 연결하기</li>
    </ol>

    <h3 style={{backgroundColor : '#ff0', color : '#f00'}}>1. inline style로 서식 적용하기</h3>
    <p> 태그 속성에 style=중괄호 중괄호 서식 : 값 중괄호 중괄호 를 적어준다</p>


    <h3 style={style01}>2. 변수로 자바스크립트 객체 처리하여 css 서식 적용하기</h3>
    <p>태그의 속성에 style= 중괄호 객체명 중괄호 를 적어준다</p>

    <h3 className='txt01'>3. 외부 스타일을 작성하여 import 로 서식 불러오기</h3>

    <h3>4. className, tag, id명으로 서식 적용하기</h3>

    <h3 className={styles.title01}>5. css module 방식으로 서식 적용하기</h3>
    <p className={styles.title02}>스타일 서식을 적용하다 보면 같은 서식이 중복 적용될 수 있는데, module 방식을 사용하면 클래스가 중첩되는 것을 방지할 수 있다.</p>


    </>
  );
}

export default App;
