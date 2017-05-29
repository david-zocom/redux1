const Actions = {
	ProductClick: 'PRODUCT_CLICK',
	HomeClick: 'HOME_CLICK'
};


function actionHomeClick() {
	return { type: Actions.HomeClick };
}
function actionProductClick(product) {
	return {
		type: Actions.ProductClick,
		product
	};
}

export { Actions, actionProductClick, actionHomeClick };