import React from 'react';
import {actionProductClick, actionHomeClick} from '../actions.js';
import {store} from '../index.js';
import ProductList from './ProductList';


/**
 * Home.js is a container for the store, just passes props to ProductList and Product.
 * The click functions are a bit awkward, you could have this as a class
 */

const boundActionHomeClick = () => {
  store.dispatch(actionHomeClick());
}

const boundActionProductClick = (x) => {
  store.dispatch(actionProductClick(x));
}

export default function Home({ products, activeView, selectedProduct}) {
  return (
    <div>
      <h1>My Redux webshop</h1>
      <p>View our fine selection of warez. Click one!</p>
      <ProductList
        products={products}
        activeView={activeView}
        selectedProduct={selectedProduct}
        boundActionHomeClick={boundActionHomeClick}
        boundActionProductClick={boundActionProductClick} />
    </div>
  );
}