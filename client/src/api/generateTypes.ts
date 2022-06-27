import { ErrorResponse } from './errors';
import status from './status';

type GenerateTypesConfig = {
	packageName?: string;
	root?: string;
	outputFile?: string;
};

const generateTypes = (data: any, config?: GenerateTypesConfig): Promise<string | ErrorResponse> =>
	fetch('/api/generate' + new URLSearchParams(config), {
		method: 'POST',
		body: typeof data === 'string' ? data : JSON.stringify(data),
	})
		.then(status)
		.then((res) => res.text())
		.catch((err) => {
			return err.json();
		});

export default generateTypes;
