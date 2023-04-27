import React from 'react';

function NotFound(props) {
  return (
    <>
    <p>
      <img src={`${process.env.PUBLIC_URL}/images/Oops.jpeg`} alt="" />
    </p>
    <p>
      Oops! That page can't be found.
    </p>

    </>
  );
}

export default NotFound;