import React from 'react';
import dummy from './food.json';
import './productchild.css'

function ProductChild(props) {
  return (
    <>
    {/* <ul>
      {dummy.foods.map(product =>
      (<li key={product.filename}> 
        <p>{product.file}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.review}</p>
        </li>
      )
      )}
    </ul> */}




    <h2 className="shoptitle">이 상품 어때요?</h2>
    <div className="flexable">
      {dummy.foods.map(product =>
        (<figure key={product.filename}> 
          <img src={`${process.env.PUBLIC_URL}/images/${product.file}`} />
          <figcaption>
            <p className="name">{product.name}</p>
            <p className="price">{product.price}</p>
            <p className="review"><i class="fa-regular fa-comment-dots"></i>{product.review}</p>
          </figcaption>
          </figure>
        )
      )}
    </div>

  </>
  );
}

export default ProductChild;