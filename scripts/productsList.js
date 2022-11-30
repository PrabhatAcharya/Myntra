import getData from '../utils/getData.js';
import { navbar } from '../components/navbar.js';
document.getElementById('navbar').innerHTML = navbar();

import renderProducts from '../utils/renderSingleProduct.js';

const URL = 'http://localhost:3000/products';

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

const filterProducts = async (URL) => {
	const products = await getData(URL);
	const filtered = products.filter((el) => {
		return el[productsFor];
	});
	return filtered;
};

const container = document.getElementById('container');

const renderAllProducts = async (data) => {
	data.forEach((el) => {
		renderProducts(el, container);
	});
};

renderAllProducts(await filterProducts(URL));

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

let priceCapApplied = new Array();

async function applyPriceCap() {
	priceCap.forEach((el) => {
		if (el.checked) {
			priceCapApplied.push(el);
			priceCapApplied = [...new Set(priceCapApplied)];
		} else if (priceCapApplied.includes(el))
			priceCapApplied.splice(priceCapApplied.indexOf(el), 1);
	});

	var priceAppliedProducts = [];
	const filtered = await filterProducts(URL);
	// const productsWithDiscounts = await applyDiscounts();

	// if (productsWithDiscounts.length > 0) filtered = productsWithDiscounts;

	if (priceCapApplied.length > 0) {
		console.log('true');
		for (let i = 0; i < priceCapApplied.length; i++) {
			let el = priceCapApplied[i];

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
		}
	}
	console.log(priceAppliedProducts);
	return priceAppliedProducts;
}

// ////////////////////////////////
// ///sorting of products
// ////////////////////////////////

const selectEl = document.getElementById('sorting');

selectEl.addEventListener('change', async (e) => {
	let dataToBeSorted;
	const filtered = await filterProducts(URL);
	const priceApplied = await applyPriceCap();
	const discountsPrice = await applyDiscounts();

	if (priceApplied.length > 0) {
		dataToBeSorted = priceApplied;
	} else {
		dataToBeSorted = filtered;
	}

	if (discountsPrice.length > 0) {
		dataToBeSorted = discountsPrice;
	}

	if (e.target.value === 'discount') {
		dataToBeSorted.sort((a, b) => {
			return +b.discount - +a.discount;
		});

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

		container.innerHTML = '';

		dataToBeSorted.forEach((el) => {
			renderProducts(el, container);
		});
	}
});

// // ////////////////////////////////////////
// // ///filter on the basis of the discounts
// // ////////////////////////////////////////

const discounts = document.getElementsByName('discount');
discounts.forEach((e) => {
	e.addEventListener('change', (e) => {
		applyDiscounts();
	});
});

// //////////////////////////////////////
// ///Apply discounts function
// //////////////////////////////////////

async function applyDiscounts() {
	let dataToBeSorted;

	let filtered = await filterProducts(URL);
	let priceApplied = await applyPriceCap();

	if (priceApplied.length > 0) {
		dataToBeSorted = priceApplied;
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

	container.innerHTML = '';
	productsAfterDiscounts.forEach((e) => {
		renderProducts(e, container);
	});

	return productsAfterDiscounts;

	// console.log(productsAfterDiscounts);
}
