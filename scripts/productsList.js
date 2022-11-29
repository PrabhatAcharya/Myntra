import data from '../data/data.js';
import renderProducts from '../utils/renderSingleProduct.js';

const productsSection = document.getElementsByName('gender');
let productsFor = localStorage.getItem('productsFor')
	? JSON.parse(localStorage.getItem('productsFor'))
	: 'men';

document.getElementById('clearAll').addEventListener('click', (e) => {
	location.reload();
});

if (!productsFor) {
	productsSection.forEach((el) => {
		el.addEventListener('change', (e) => {
			productsFor = e.target.id;
			localStorage.setItem('productsFor', JSON.stringify(productsFor));
			location.reload();
		});
		if (el.checked) {
			productsFor = el.id;
		}
	});
} else {
	productsSection.forEach((el) => {
		el.addEventListener('change', (e) => {
			productsFor = e.target.id;
			localStorage.setItem('productsFor', JSON.stringify(productsFor));
			location.reload();
		});
		if (el.id === productsFor) {
			el.checked = true;
		}
	});
}

let products;
if (localStorage.getItem('products')) {
	products = JSON.parse(localStorage.getItem('products'));
} else {
	products = data.products;
	localStorage.setItem('products', JSON.stringify(products));
}

const filtered = products.filter((el) => {
	return el[productsFor];
});

const container = document.getElementById('container');

filtered.forEach((el) => {
	renderProducts(el, container);
});

///////////////////////////////
///Price range application
///////////////////////////////

const priceCap = document.getElementsByName('price');

priceCap.forEach((el) => {
	el.addEventListener('change', (e) => {
		applyPriceCap();
		let toReload = true;
		priceCap.forEach((elem) => {
			if (elem.checked) toReload = false;
		});
		if (toReload) location.reload();
	});
});

let priceCapApplied = new Set();

function applyPriceCap() {
	let priceAppliedProducts = [];
	priceCap.forEach((el) => {
		if (el.checked) priceCapApplied.add(el);
		else if (priceCapApplied.has(el)) priceCapApplied.delete(el);
	});

	if (priceCapApplied.size) {
		priceCapApplied.forEach((el) => {
			if (el.id === '2000-3000') {
				let ans = filtered.filter((el) => {
					let priceAfterDiscount;
					if (el.discount) {
						priceAfterDiscount = +el.price - (+el.price * el.discount) / 100;
					} else {
						priceAfterDiscount = el.price;
					}

					return +priceAfterDiscount >= 2000 && +priceAfterDiscount <= 3000;
				});

				priceAppliedProducts = priceAppliedProducts.concat(ans);
			} else if (el.id === '3001-4000') {
				let ans = filtered.map((el) => {
					return el;
				});

				ans = ans.filter((el) => {
					let priceAfterDiscount;
					if (el.discount) {
						priceAfterDiscount = +el.price - (+el.price * el.discount) / 100;
					} else {
						priceAfterDiscount = el.price;
					}
					return +priceAfterDiscount >= 3001 && +priceAfterDiscount <= 4000;
				});

				priceAppliedProducts = priceAppliedProducts.concat(ans);
			} else {
				let ans = filtered.map((el) => {
					return el;
				});

				ans = ans.filter((el) => {
					let priceAfterDiscount;
					if (el.discount) {
						priceAfterDiscount = +el.price - (+el.price * el.discount) / 100;
					} else {
						priceAfterDiscount = el.price;
					}
					return +priceAfterDiscount >= 4001;
				});

				priceAppliedProducts = priceAppliedProducts.concat(ans);
			}
			if (priceAppliedProducts.length > 0) {
				container.innerHTML = '';
				priceAppliedProducts.forEach((el) => {
					renderProducts(el, container);
				});
			} else {
				container.innerHTML = '';
				filtered.forEach((el) => {
					renderProducts(el, container);
				});
			}
		});
	}
	return priceAppliedProducts;
}

////////////////////////////////
///sorting of products
////////////////////////////////

const selectEl = document.getElementById('sorting');

selectEl.addEventListener('change', (e) => {
	let dataToBeSorted;
	if (applyPriceCap().length > 0) {
		dataToBeSorted = applyPriceCap();
	} else {
		dataToBeSorted = filtered;
	}

	if (e.target.value === 'discount') {
		dataToBeSorted.sort((a, b) => {
			return +b.discount - +a.discount;
		});

		console.log(filtered);

		container.innerHTML = '';

		dataToBeSorted.forEach((el) => {
			renderProducts(el, container);
		});
	} else if (e.target.value === 'htl') {
		dataToBeSorted.sort((a, b) => {
			let priceAfterDiscountA;
			if (a.discount) {
				priceAfterDiscountA = +a.price - (+a.price * a.discount) / 100;
			} else {
				priceAfterDiscountA = a.price;
			}

			let priceAfterDiscountB;
			if (b.discount) {
				priceAfterDiscountB = +b.price - (+b.price * b.discount) / 100;
			} else {
				priceAfterDiscountB = b.price;
			}

			return +priceAfterDiscountB - +priceAfterDiscountA;
		});

		console.log(filtered);

		container.innerHTML = '';

		dataToBeSorted.forEach((el) => {
			renderProducts(el, container);
		});
	} else if (e.target.value === 'lth') {
		dataToBeSorted.sort((a, b) => {
			let priceAfterDiscountA;
			if (a.discount) {
				priceAfterDiscountA = +a.price - (+a.price * a.discount) / 100;
			} else {
				priceAfterDiscountA = a.price;
			}

			let priceAfterDiscountB;
			if (b.discount) {
				priceAfterDiscountB = +b.price - (+b.price * b.discount) / 100;
			} else {
				priceAfterDiscountB = b.price;
			}

			return +priceAfterDiscountA - +priceAfterDiscountB;
		});

		console.log(filtered);

		container.innerHTML = '';

		dataToBeSorted.forEach((el) => {
			renderProducts(el, container);
		});
	}
});

////////////////////////////////////////
///filter on the basis of the discounts
////////////////////////////////////////

const discounts = document.getElementsByName('discount');
discounts.forEach((e) => {
	e.addEventListener('change', (e) => {
		applyDiscounts();
	});
});

//////////////////////////////////////
///Apply discounts function
//////////////////////////////////////

function applyDiscounts() {
	let dataToBeSorted;
	if (applyPriceCap().length > 0) {
		dataToBeSorted = applyPriceCap();
	} else {
		dataToBeSorted = filtered;
	}
	let checked;
	discounts.forEach((e) => {
		if (e.checked) checked = e;
	});

	let productsAfterDiscounts = [];

	console.log(checked);
	if (checked.id === '10%above') {
		productsAfterDiscounts = dataToBeSorted.filter((e) => {
			return +e.discount >= 10;
		});
	} else if (checked.id === '20%above') {
		productsAfterDiscounts = dataToBeSorted.filter((e) => {
			return +e.discount >= 20;
		});
	} else {
		productsAfterDiscounts = dataToBeSorted.filter((e) => {
			return +e.discount >= 30;
		});
	}
	console.log(productsAfterDiscounts);
}
