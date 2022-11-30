const URL = 'http://localhost:3000/products';

const getData = async (URL) => {
	const res = await fetch(URL);
	const data = await res.json();
	return data;
};

export default getData;
