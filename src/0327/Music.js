import React from 'react';
import music from './music_data.json';
import Mchild from './Mchild';

function Music() {
  return (
    <>
      <ul>
        {music.music.slice(0,20).map((mu) =>{
          // if(index > 20) return false;
          return <Mchild album={mu.albumID} id={mu.id} title={mu.title} url={mu.url} thumb={mu.thumbnailUrl}/>})
        }
      </ul>
    </>
  );
}

export default Music;