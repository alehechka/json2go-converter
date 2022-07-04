import status from './status';

const getURL = (url: string) =>
	fetch(url)
		.then(status)
		.then((res) => res.json())
		.then((data) => JSON.stringify(data, null, 4));

export default getURL;
