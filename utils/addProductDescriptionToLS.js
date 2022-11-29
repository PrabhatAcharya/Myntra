export default function addProductDescriptionToLS(id) {
	let detailsOf = JSON.parse(localStorage.getItem('products')).filter((el) => {
		return el.id === id;
	});
	localStorage.setItem('indProduct', JSON.stringify(detailsOf[0]));
}
