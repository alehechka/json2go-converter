import status from './status';

export type Defaults = {
	outputFile: string;
	packageName: string;
	root: string;
	timeFormat: string;
	alphabetical: string;
	omitempty: string;
};

const getDefaults = (): Promise<Defaults> =>
	fetch('/api/defaults')
		.then(status)
		.then((res) => res.json());

export default getDefaults;
