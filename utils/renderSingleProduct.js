import addProductDescriptionToLS from './addProductDescriptionToLS.js';

import addToWishList from './addToWishlist.js';

export default function renderProducts(object, container) {
	let card = document.createElement('div');
	card.classList.add('card');
	card.style.cursor = 'pointer';
	card.addEventListener('click', (e) => {
		addProductDescriptionToLS(object.id);
		// window.location.href = '../productDescription/productDescription.html';
	});

	let img = document.createElement('img');
	img.setAttribute('src', object.images[0]);
	img.setAttribute('alt', object.productTitle);

	let bottom = document.createElement('div');

	let p = document.createElement('h3');
	p.innerHTML = object.productTitle;

	let pMuted = document.createElement('p');
	pMuted.innerHTML = object.description;

	let priceAfterDiscount;
	let s = document.createElement('s');
	if (object.discount) {
		priceAfterDiscount =
			+object.price - (+object.price * object.discount) / 100;
		s.innerHTML = 'Rs.' + object.price;
	}

	let span = document.createElement('span');
	span.innerHTML = priceAfterDiscount
		? ' Rs.' + priceAfterDiscount
		: ' Rs.' + object.price;

	let p1 = document.createElement('p');
	p1.append(span, s);

	bottom.append(p, pMuted, p1);

	let rating = document.createElement('p');
	rating.innerHTML = object.rating + '<i class="fa-solid fa-star"></i>';
	rating.id = 'rating';

	let wishListButton = document.createElement('div');
	wishListButton.id = 'wishListButton';
	wishListButton.innerHTML = `${
		object.wishlist
			? '<i class="fa-solid fa-heart"></i> Wishlisted'
			: '<i class="fa-regular fa-heart"></i> Add to Wishlist'
	} `;
	wishListButton.addEventListener('click', (e) => {
		addToWishList(object.id);
	});

	if (object.wishlist) wishListButton.classList.add('addedToWishlist');

	card.append(img, bottom, rating, wishListButton);
	container.append(card);
}
