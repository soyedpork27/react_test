import React, { Component } from 'react';
// import { useState } from 'react';
import './App.css';

// axios
import axios from 'axios';



import Movie from './Movie';



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

    const {
      data : {
        data : {
          movies
        },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=year');


    // 무비 데이터를 axios 로부터 겟방식으로 받아 변수에 할당
    // await(비동기문법)
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');

    // console.log(movies['data']['data']);
    console.log(movies);
    // console.log(movies['data']['data']['movie_count']);



    this.setState({movie : movies, isLoading : false});








  }

  
  // 생명주기의 단위
  render() {
    
    this.getMovies();
    const {isLoading, movie} = this.state; 
    


    return (
      <>
        <header>
          <h1>
            <img src={`${process.env.PUBLIC_URL}/images/logo_YTS.svg`} alt="로고 이미지" />
          </h1>
        </header>

        <main>

          <section className={isLoading ? 'load_txt' : '' }>
            { isLoading ? 'Loading' : movie.map((movie)=><Movie key={movie.id} id={movie.id} poster={movie['medium_cover_image']} title={movie['title']} year={movie['year']} genres={movie['genres']} summary={movie.summary} 
            />) }

            {/* movie.map((movie)=><Movie image={movie['medium_cover_image']} title={movie['title']} year={movie['year']} genres={movie['genres']} summary={movie.summary} />) */}
          </section>

          <img src={`${process.env.PUBLIC_URL}/images/bx_loader.gif`} alt="" className={`center ${isLoading ? '':'disappear' }`} />
        </main>

      </>
    );
  }
}
export default App;