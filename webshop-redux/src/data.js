import {Actions} from './actions.js';

const Constants = {
	Home: 'VIEW_HOME',
	Product: 'VIEW_PRODUCT',
	Admin: 'VIEW_ADMIN'
};

const Products = [
	{
		name: 'lawnmover',
		price: 1299.5
	},
	{
		name: 'chocolate',
		price: 45
	},
	{
		name: 'rock and roll',
		price: 400000000
	},
	{
		name: 'computer',
		price: 12500
	}
];


export { Constants, Products, Actions };
