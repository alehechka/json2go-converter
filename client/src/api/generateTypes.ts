type GenerateTypesConfig = {
	packageName?: string;
	root?: string;
	outputFile?: string;
};

const generateTypes = (data: any, config?: GenerateTypesConfig) =>
	fetch('/api/generate' + new URLSearchParams(config), {
		method: 'POST',
		body: typeof data === 'string' ? data : JSON.stringify(data),
	}).then((res) => res.text());

export default generateTypes;
