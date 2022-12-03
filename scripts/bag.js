// function showMore() {
//   var dots = document.getElementById("tca");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Show more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Show less";
//     moreText.style.display = "inline";
//   }
// }

// var ar = [];
// ar.push("https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/2510303/2018/6/6/e63b4b81-90c5-49d8-8a7d-79352e699cca1528285239602-HRX-by-Hrithik-Roshan-Men-Pack-of-3-Ankle-Length-Socks-21315-1.jpg");
// ar.push("https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/13210360/2021/4/16/fa7a81ba-6e78-4970-9ec7-eaefbfb4353a1618531813062-Ustraa-Men-Strong-Hold-Wet-Look-Hair-Wax-100g-74116185318119-1.jpg");
// ar.push("https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2020/11/17/e6d22be2-c2c4-476e-8c1e-21d67ecb79ae1605619799696-2.jpg");
// ar.push("https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/13236716/2021/2/8/c244ef91-4421-4a9d-bf24-d1a83d843dc71612761404073UstraaMenDeTanFaceMaskForDrySkin1.jpg")
// ar.push("https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/13219906/2021/4/16/777f2734-0c1f-4924-89a6-da9cde388abd1618531838747-Ustraa-Men-Activated-Charcoal-Face-Scrub-2951618531837959-5.jpg")
// ar.push("https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2021/1/25/2e9cca00-e225-45d5-a618-6d593bb13d741611560093950-6.jpg");
// ar.push("https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2021/2/18/2401a7d2-e0c9-4743-81d4-195a2a0ee3381613641061371-3.jpg");

// for (i = 0; ar.length > i; i++) {
//   var img = new Image(200, 200);
//   img.src = ar[i];

//   var src = document.getElementById("gridContainer");

//   src.appendChild(img);
// }

// function showSocks() {
//   var ar = [];
//   ar.push("https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/2510303/2018/6/6/e63b4b81-90c5-49d8-8a7d-79352e699cca1528285239602-HRX-by-Hrithik-Roshan-Men-Pack-of-3-Ankle-Length-Socks-21315-1.jpg");
//   ar.push("https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/12402750/2020/10/8/db5db238-ca03-4feb-ba68-578bfaa9e5d61602153406605-WROGN-Men-Socks-7111602153405301-5.jpg");

//   for (i = 0; ar.length > i; i++) {
//     var img = new Image(200, 200);
//     img.src = ar[i];

//     var src = document.getElementById("gridContainer");

//     src.appendChild(img);
//   }
// }
// function showScarves() {
//   var ar = [];
//   ar.push("https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2021/1/5/be913fb0-a595-48df-88b9-3cd87c7bae051609862510453-1.jpg");
//   ar.push("https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2021/1/5/b2127c26-7423-40fb-8040-de31ffc05da11609853485131-3.jpg");
//   for (i = 0; ar.length > i; i++) {
//     var img = new Image(200, 200);
//     img.src = ar[i];

//     var src = document.getElementById("gridContainer");

//     src.appendChild(img);
//   }
// }

import getData from '../utils/getData.js';
const URL = 'http://localhost:3000/products';

async function renderCartProducts() {
	const data = await getData('http://localhost:3000/products');
	const filtered = data.filter((e) => {
		return e.cart;
	});

	document.getElementById(
		'totalCount'
	).innerHTML = `My Shopping Bag(${filtered.length} item)`;
	document.getElementById('totalItem').innerHTML = filtered.length;

	const cartProducts = document.getElementById('cartProducts');

	filtered.forEach(async (e) => {
		cartProducts.innerHTML += appendProduct(e);
	});

	filtered.forEach(async (e) => {
		let select = document.querySelector(`#id-${e.id}  #quantity`);
		select.selectedIndex = e.quantity ? e.quantity - 1 : 0;
		console.log(select);
	});

	const quantities = document.getElementsByName('quantitySelect');

	quantities.forEach((e) => {
		e.addEventListener('change', async (el) => {
			const res = fetch(URL + `/${el.target.getAttribute('data-prodId')}`, {
				method: 'PATCH',
				body: JSON.stringify({ quantity: el.target.value }),
				headers: { 'Content-Type': 'application/json' },
			});
		});
	});

	const deleteButtons = document.getElementsByName('deleteButton');
	console.log(deleteButtons);
	deleteButtons.forEach((e) => {
		e.addEventListener('click', async (e) => {
			const res = fetch(URL + `/${e.target.getAttribute('data-prodId')}`, {
				method: 'PATCH',
				body: JSON.stringify({ cart: false }),
				headers: { 'Content-Type': 'application/json' },
			});
		});
	});
}

var obj = {
	id: 1,
	productTitle: 'p2',
	productDetails: 'this is a product details and this is written by harsh.',
	images: [
		'https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13765620/2021/6/15/99fb4822-6259-4de3-8269-277a932f2e7c1623754255227INVICTUSMenPrintedMaternityShirt1.jpg',
	],
	rating: 4.5, //1-5 float
	size: 'small', //small,medium,large
	price: 4500, //in INR
	category: '',
	discount: 10,
	brand: '',
	women: true,
	wishlist: true,
	cart: false,
};

function appendPage() {
	let pro = JSON.parse(localStorage.getItem('cart'));
	let page = document.getElementById('center');

	page.innerHTML = null;
	page.innerHTML = ` <div class = "container4">
                    <h4>Available Offer</h4>
                    <p>
                        . 10% Instant Discount on SBI Credit Cards on a minimum spend of Rs 3000. TCA<br><br>
                        <span id = "tca">...</span><span id = "more">
                        . 5% Unlimited Cashback on Flipkart Axis Bank Ctedit Card TCA<br><br>
                        . 10% Cashback upto Rs 250 on a minimum spend of Rs 1500 with PayZapp TCA<br><br>
                        . Upto Rs 500 Cashback on Mobikwik wallet transaction of min Rs 999. Use code MBK500 on mobikwik TCA<br><br>
                        . Flat Rs 200 Cashback on first Airtel Payments Bank transcation on myntra on a min spend of Rs 2000 TCA</span>
                    </p>
                    <button onclick="showMore()" id="myBtn">Show More</button>
                </div>

                <div class = "total">
                    <h3 id = "totalCount" style = "float: left; font-size: larger; color: black; font-weight: 700;"></h3>
                    <h3 id = "totalLeft" style = "float: right; font-size: larger; color: black; font-weight: 700;"></h3>
                </div>
                <br><br><br>
                <div id= 'cartProducts'>
                    
                </div>
               `;

	let placeOrder = document.getElementById('placeOrder');

	placeOrder.innerHTML = `<div class = "grid-placeOrder">
                    <p class = "child1">COUPONS</p>
                    <p class = "child2"><b style = "color: black;">Apply Coupons</b></p>
                    <button class = "child3">APPLY</button>
                    <hr class = "child4">
                    <p class = "child5">PRICE DETAILS(<span id="totalItem"> </span> Item)</p>
                    <p class = "child6">Total MRP</p>
                    <p class = "child7" id="totalMrp">Rs. ${obj.price}</p>
                    <p class = "child8">Discount on MRP</p>
                    <p class = "child9" id="totalDiscount">- Rs. </p>
                    <p class = "child10">Coupon Discount</p>
                    <button class = "child11">Apply Coupon</button>
                    <p class = "child12">Convenience Fee <b style = "color: #ff3f6c;;">Know More</b></p>
                    <p class = "child13"><s>Rs. 99 </s> Free</p>
                    <hr class = "child14">
                    <p class = "child15">Total Amount</p>
                    <p  id = "totalAmount" class = "child16"></p>
                        <button id="placeOrder" class = "child17">PLACE ORDER</button>
                        </div>`;
}

appendPage();
renderCartProducts();
const totalAmount = document.getElementById('totalAmount');

async function setTotalAmount() {
	const data = await getData('http://localhost:3000/products');
	const filtered = data.filter((e) => {
		return e.cart;
	});
	let totalPrice = 0;
	let totalMrp = 0;
	filtered.forEach((el) => {
		totalMrp += el.price;
		totalPrice += el.quantity
			? el.quantity *
			  (el.discount
					? Math.ceil(el.price * (100 - el.discount)) / 100
					: el.price)
			: el.discount
			? Math.ceil(el.price * (100 - el.discount)) / 100
			: el.price;
	});

	totalPrice = Math.ceil(totalPrice);

	console.log(filtered);
	document.getElementById(
		'totalLeft'
	).innerHTML = `Total : Rs. - ${totalPrice}`;

	totalAmount.innerHTML = `Rs - ${totalPrice}`;

	document.getElementById('totalMrp').innerHTML = `Rs. ${totalMrp}`;
	document.getElementById('totalDiscount').innerHTML = `Rs. ${
		totalMrp - totalPrice
	}`;
}

setTotalAmount();

document.getElementById('placeOrder').addEventListener('click', (e) => {
	window.location.href = 'address.html';
});

function appendProduct(obj) {
	return `        
    <div class = "par" id='id-${obj.id}'>
    <div id = "addImages">

        <img id = "img2" src = "${obj.images[0]}"/>
        <div class = "child">
            <p class = "p">${obj.productTitle}<br>
            ${obj.category}<h5>Sold By : Vision Star</h5></p>
            <select name="size" id="size">
                <option value="SIZE:L">SIZE: L</option>
                <option value="SIZE:M">SIZE: M</option>
                <option value="SIZE:S">SIZE: S</option>
                <option value="SIZE:Xl">SIZE: XL</option>
            </select>
            <select data-prodId = "${
							obj.id
						}" name="quantitySelect" id="quantity">
                <option value="1">Qty: 1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <button name = "deleteButton" data-prodId = "${
							obj.id
						}" id="delete-${obj.id}">Remove</button>
            <h3>Discount: ${obj.discount}%</h3>
            <h6 style = "color: cornflowerblue;">Delivery By 28 JUL 2021</h6>

        </div>
        <div>
            <p id = "discount"><s>Rs. ${obj.price}</s><br>Rs. ${Math.ceil(
		(obj.price * (100 - obj.discount)) / 100
	)}</p>
        </div>
    </div>
</div>
    `;
}
