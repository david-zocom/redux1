import React, {	Component } from 'react';
//import {createStore} from 'redux';
//import logo from './logo.svg';
import './App.css';
import { Constants, /*Actions, Products*/ } from './data.js';
import Home from './components/Home'; //Main logic in home component
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


export default App;
