import status from './status';

const getVersion = () =>
	fetch('/api/version')
		.then(status)
		.then((res) => res.text());

export default getVersion;
