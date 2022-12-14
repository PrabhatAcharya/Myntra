//if page details is to be shown in the individual product page then use key from localStorage -> indProduct (it stores an object of the details of that product)

const data = {
	products: [
		{
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
		},
		{
			id: 2,
			productTitle: 'p2',
			productDetails: 'this is a product details and this is written by harsh.',
			images: [
				'https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/20510786/2022/10/27/9dcdebe9-fa6e-41a6-8e26-ab08040b13ba1666846002867AllenSollyMenBeigeTexturedSlimFitTrousers1.jpg',
			],
			rating: 4.5, //1-5 float
			size: 'small', //small,medium,large
			price: 4400, //in INR
			category: '',
			discount: 15,
			brand: '',
			women: true,
			wishlist: false,
			cart: false,
		},
		{
			id: 3,
			productTitle: 'p3',
			productDetails: 'this is a product details and this is written by harsh.',
			images: [
				'https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15533082/2021/10/29/1526df5c-a4f7-4753-a0aa-0243343c34c61635486065420-THE-BEAR-HOUSE-Men-Shirts-7861635486064842-1.jpg',
			],
			rating: 4.5, //1-5 float
			size: 'small', //small,medium,large
			price: 3000, //in INR
			category: '',
			discount: 20,
			brand: '',
			women: true,
			wishlist: true,
			cart: false,
		},
		{
			id: 4,
			productTitle: 'p4',
			productDetails: 'this is a product details and this is written by harsh.',
			images: [
				'https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/19955304/2022/10/14/90e118a6-8077-4e38-9b41-ef38d8cef4b41665736989243-Louis-Philippe-Men-Grey-Slim-Fit-Formal-Shirt-10216657369887-1.jpg',
			],
			rating: 4.5, //1-5 float
			size: 'small', //small,medium,large
			price: 2100, //in INR
			category: '',
			discount: '',
			brand: '',
			women: true,
			wishlist: false,
			cart: false,
		},
		{
			id: 5,
			productTitle: 'p5',
			productDetails: 'this is a product details and this is written by harsh.',
			images: [
				'https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/12853658/2020/11/12/ac54b2ef-3897-495f-bcd3-8885aaa1eb561605161332808TBH-TALLY-BK1.jpg',
			],
			rating: 4.5, //1-5 float
			size: 'small', //small,medium,large
			price: 3900, //in INR
			category: '',
			discount: '',
			brand: 'Zara',
			men: true,
			wishlist: false,
			cart: false,
		},
		{
			id: 6,
			productTitle: 'p6',
			productDetails: 'this is a product details and this is written by harsh.',
			images: [
				'https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7719545/2018/12/11/3a2b1638-8413-4f44-99ca-8241b5f2878d1544529615684-DENNISON-Men-Trousers-3351544529614293-1.jpg',
			],
			rating: 4.5, //1-5 float
			size: 'small', //small,medium,large
			price: 3500, //in INR
			category: '',
			discount: '',
			brand: '',
			women: true,
			wishlist: false,
			cart: false,
		},
		{
			id: 7,
			productTitle: 'p7',
			productDetails: 'this is a product details and this is written by harsh.',
			images: [
				'https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14002692/2021/6/15/7c7ec6a9-30d3-4b44-8341-22d2049109d51623744266870-INVICTUS-Men-Shirts-8021623744266313-1.jpg',
			],
			rating: 4.5, //1-5 float
			size: 'small', //small,medium,large
			price: 3400, //in INR
			category: '',
			discount: '',
			brand: '',
			men: true,
			wishlist: false,
			cart: false,
		},
		{
			id: 8,
			productTitle: 'p8',
			productDetails: 'this is a product details and this is written by harsh.',
			images: [
				'https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13765618/2021/12/8/43811e0d-5dcd-4fc7-b050-433275c8edd71638962596154-INVICTUS-Men-Easy-Care-White-Formal-Shirt-551638962595923-1.jpg',
			],
			rating: 4.5, //1-5 float
			size: 'small', //small,medium,large
			price: 2600, //in INR
			category: '',
			discount: '',
			brand: '',
			men: true,
			wishlist: false,
			cart: false,
		},
	],
};

export default data;
