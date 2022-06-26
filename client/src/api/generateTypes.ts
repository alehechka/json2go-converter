type GenerateTypesConfig = {
	packageName?: string;
	root?: string;
	outputFile?: string;
};

const generateTypes = (data: any, config?: GenerateTypesConfig) => {
	fetch('/api/generate' + new URLSearchParams(config), {
		method: 'POST',
		body: JSON.stringify(data),
	});
};

export default generateTypes;
