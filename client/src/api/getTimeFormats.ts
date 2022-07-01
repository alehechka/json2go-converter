import status from './status';

type TimeFormatsResponse = { formats: Record<string, string> };

const getTimeFormats = (): Promise<TimeFormatsResponse> =>
	fetch('/api/time-formats')
		.then(status)
		.then((res) => res.json());

export default getTimeFormats;
