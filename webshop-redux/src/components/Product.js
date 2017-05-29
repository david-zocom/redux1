import React from 'react';


/**
 * Destructuring the parameters to get rid of "props" before everything.
 */

export default function Product({ selected, boundActionHomeClick }) {
  return (
    <div>
      <div className="product">
        <span className="productName">{selected.name}</span> <br/>
        <span className="productPrice">{selected.price}</span>
      </div>
      <button onClick={() => boundActionHomeClick()}>View all products</button>
    </div>
  );
}