import React from 'react';
import ProtoTypes from 'prop-types';

function Movie({key, id, poster, title, year, genres, summary}) {


  // ProtoTypes = () => {}


  return (
    <article className='article'>
      <img src={poster} alt={`${title} 이미지`} />

      <div>

        <h3>{title}</h3>

        <p>{year}</p>

        <dl>
          <dt>영화 장르</dt>
          <dd>
            <ul>
              <li>{genres}</li>
            </ul>
          </dd>
        </dl>

        <p>{summary}</p>

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