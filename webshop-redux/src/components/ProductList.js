import React from 'react';
import {Constants} from '../data';
import Product from './Product.js';

/**
 * May be easier to just do "props" here in parameter, the map function could maybe also use the Product component?
 * Handle some of the logic in the Product component.
 */

export default function ProductList({ selectedProduct, activeView, products, boundActionProductClick, boundActionHomeClick }) {

  //console.log('this.props.activeView', this.props.activeView)
  if( activeView === Constants.Product ) {
    return <Product selected={selectedProduct} 
                    boundActionHomeClick={boundActionHomeClick}/>;
  }
  const list = products.map( ( product, index) => (
    <div key={index} 
          onClick={ e => {boundActionProductClick(product)}} >
      <span className="productName">{product.name}</span> <br/>
      <span className="productPrice">{product.price}</span>
    </div>) );

  return(
    <div className="productList">
      {list}
    </div>
    );
}