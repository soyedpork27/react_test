import React, { Component } from 'react';
// import { useState } from 'react';
import './App.css';

// axios
import axios from 'axios';



class App extends Component {

  state = {
    isLoading : true,
    movie : []
  }

  // 생명주기함수 render 가 끝나고 나서 실행되는 함수

  componentDidMount(){
    setTimeout( () => {
      this.setState({isLoading : false})
    },6000);
  }

  // 함수 만들기
  // axios 플러그인을 사용하여 api 데이터를 호출하기 위한 함수 생성
  // async 함수(비동기문법)를 사용하여 선언
  getMovies = async() => {

    // 무비 데이터를 axios 로부터 겟방식으로 받아 변수에 할당
    // await(비동기문법)
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    console.log(movies);
  }

  
  // 생명주기의 단위
  render() {
    
    this.getMovies();
    const {isLoading} = this.state;


    return (
      <>
        {isLoading ? 'Loading' : 'We are ready' }
        <ul>
          <li></li>
        </ul>



        <img src={`${process.env.PUBLIC_URL}/images/bx_loader.gif`} alt="" className={`center ${isLoading ? '':'disappear' }`} />
      </>
    );
  }
}
export default App;