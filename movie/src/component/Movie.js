import React from 'react';
import ProtoTypes from 'prop-types';

import './css/movie.css';

function Movie({key, id, poster, title, year, genres, summary}) {


  // ProtoTypes = () => {}


  return (
    <article className='movie'>
      <img src={poster} alt={`${title} 이미지`} />

      <div className='movie_data'>

        <h3 className='movie_title'>{title}</h3>

        <p className='year'>{year}</p>

        <dl>
          <dt className='genres_title'>영화 장르</dt>
          <dd>
            <ul className='movie_genres'>
              {genres.map((genres, index) => {
                return(
                <li key={index} className="movie_genres_txt">
                  {genres}
                </li>
              )})}
            </ul>
          </dd>
        </dl>

        <p>{summary.slice(0,230)}...</p>

      </div>

    </article>
  );
}

Movie.ProtoTypes={
  // 프로토 타입 . 데이터 타입 . 필수 여부
  id : ProtoTypes.number.isRequired,
  year : ProtoTypes.number.isRequired,
  title : ProtoTypes.string.isRequired,
  summary : ProtoTypes.string.isRequired,
  poster : ProtoTypes.string.isRequired,
  genres : ProtoTypes.arrayOf(ProtoTypes.string).isRequired
}

export default Movie;