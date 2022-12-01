import getData from './getData.js';
import URL from './url.js';

export default async function addToWishList(id) {
	const product = await getData(URL + `/${id}`);
	const res = await fetch(URL + `/${id}`, {
		method: 'PATCH',
		body: JSON.stringify({ wishlist: !product.wishlist }),
		headers: { 'Content-Type': 'application/json' },
	});

	location.reload();
}
