import sanitizeMap from '../utils/sanitizeMap';
import { ErrorResponse } from './errors';
import { Defaults } from './getDefaults';
import status from './status';

export type GenerateTypesConfig = Partial<Defaults>;

const generateTypes = (data: any, config?: GenerateTypesConfig): Promise<string | ErrorResponse> =>
	fetch('/api/generate?' + new URLSearchParams(sanitizeMap(config)), {
		method: 'POST',
		body: typeof data === 'string' ? data : JSON.stringify(data),
	})
		.then(status)
		.then((res) => res.text())
		.catch((err) => {
			return err.json();
		});

export default generateTypes;
