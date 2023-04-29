import React from 'react';

// let n = 1;

function Mchild({album, id, title, url, thumb}) {
  // if(id > 20) return false;
  return (
      // for(let n = 0; n < 19 ; n++){
      <>
        <li>
          {/* <p>
          album : {album}
          </p> */}
          <p>
          id : {id}
          </p>
          <p>
          title : {title}
          </p>
          <p>
          <img src={`${url}`} alt="" />
          </p>
          <p>
          <img src={`${thumb}`} alt="" />
          </p>
        </li>
      </>
  // }
    );
}

export default Mchild;