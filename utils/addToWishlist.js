import getData from './getData.js';
const URL = 'http://localhost:3000/products';

export default async function addToWishList(id) {
	const product = await getData(URL + `/${id}`);

	await fetch(URL + `/${id}`, {
		method: 'PATCH',
		body: JSON.stringify({ wishlist: !product.wishlist }),
		headers: { 'Content-Type': 'application/json' },
	});
}
