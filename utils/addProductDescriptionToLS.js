import getData from './getData.js';
import URL from './url.js';

export default async function addProductDescriptionToLS(id) {
	const details = await getData(URL + `/${id}`);
	localStorage.setItem('indProduct', JSON.stringify(details));
}
