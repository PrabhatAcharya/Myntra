//if page details is to be shown in the individual product page then use key from localStorage -> indProduct (it stores an object of the details of that product)

const data = {
	products: [
		{
			id: 1,
			productTitle: 'p2',
			productDetails: '',
			images: ['', '', ''],
			rating: 4.5, //1-5 float
			size: 'small', //small,medium,large
			price: 2219, //in INR
			category: '',
			dicount: '',
			brand: '',
			women: true,
			wishlist: false,
			cart: false,
		},
	],
};

export default data;
