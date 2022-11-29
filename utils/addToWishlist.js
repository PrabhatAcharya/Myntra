export default function addToWishList(id) {
	let products = JSON.parse(localStorage.getItem('products')) || [];

	// console.log(id);

	let a = [];
	products.forEach((element) => {
		if (element.id === id) {
			let o = { ...element, wishlist: !element.wishlist };
			a.push(o);
		} else {
			a.push(element);
		}
	});

	location.reload();

	localStorage.setItem('products', JSON.stringify(a));
}
