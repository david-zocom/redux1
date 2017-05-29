import React, {	Component } from 'react';
//import {createStore} from 'redux';
//import logo from './logo.svg';
import './App.css';
import { Constants, /*Actions, Products*/ } from './data.js';
import {actionProductClick, actionHomeClick} from './actions.js';
//import {rootReducer/*, changeViewReducer, reducer*/} from './reducers.js';
import {store} from './index.js';
/*
State:
- products: name, price, (description, picture)
- loggedIn: username or null
- activeView: current active view
*/

/*
+ Webshop views:
Home: display list of products
Details: display details about a product
Admin: add/edit/remove products
Checkout: view price of shopping bag
*/
//let store = createStore(rootReducer);
//store.subscribe( render );
//store.dispatch({type: Actions.??});

class App extends Component {
	render() {
		//console.log('App.js: App: this.props:',this.props)
		switch( this.props.activeView ) {
			/*case Constants.Admin:
				// TODO
			case Constants.Product:
				// TODO */
			case Constants.Home:
			default:
				return <Home {...this.props} />;
		}
	}
}
const boundActionHomeClick = () => {
	//console.log('boundActionHomeClick');
	store.dispatch(actionHomeClick());
}
const boundActionProductClick = (x) => {
	//console.log('boundActionProductClick');
	store.dispatch(actionProductClick(x));
}
function Home(props) {
	//console.log('App.js: Home: props:', props);
	return (
		<div>
			<h1>My Redux webshop</h1>
			<p>View our fine selection of warez. Click one!</p>
			<ProductList
				products={props.products}
				activeView={props.activeView}
				selectedProduct={props.selectedProduct} />
		</div>
	);
}
class ProductList extends Component {
	render() {
		//console.log('this.props.activeView', this.props.activeView)
		if( this.props.activeView === Constants.Product ) {
			return <Product selected={this.props.selectedProduct}/>;
		}
		const list = this.props.products.map( x => (
			<div key={x.name} 
				onClick={(e) => {boundActionProductClick(x)}} >
				<span className="productName">{x.name}</span> <br/>
				<span className="productPrice">{x.price}</span>
			</div>) );
		return <div className="productList">{list}</div>;
	}
}
function Product(props) {
	const x = props.selected;
	return (
		<div>
			<div className="product">
				<span className="productName">{x.name}</span> <br/>
				<span className="productPrice">{x.price}</span>
			</div>
			<button onClick={() => boundActionHomeClick()}>View all products</button>
		</div>
	);
}

export default App;
