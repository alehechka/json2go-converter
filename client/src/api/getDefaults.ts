import status from './status';

const getDefaults = (): Promise<Record<string, string>> =>
	fetch('/api/defaults')
		.then(status)
		.then((res) => res.json());

export default getDefaults;
