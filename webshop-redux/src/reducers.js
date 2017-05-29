import { Products, Constants, Actions } from './data.js';
//import {combineReducers} from 'redux';

const initialState = {
	products: Products,
	loggedIn: null,
	activeView: Constants.Home
};

const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case Actions.ProductClick:
			return {
				loggedIn: state.loggedIn,
				products: state.products,
				activeView: Constants.Product,
				selectedProduct: action.product
			}
		case Actions.HomeClick:
			return {
				loggedIn: state.loggedIn,
				products: state.products,
				activeView: Constants.Home
			}
		default:
			return state;
		}
};


export {rootReducer};//, changeViewReducer, reducer};
