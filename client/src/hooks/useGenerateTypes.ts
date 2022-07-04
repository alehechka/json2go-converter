import { useBooleanToggle } from '@mantine/hooks';
import { useCallback, useState } from 'react';
import { Error } from '../api/errors';
import generateTypes, { GenerateTypesConfig } from '../api/generateTypes';

const useGenerateTypes = () => {
	const [jsonPayload, setJSONPayload] = useState('');
	const [submitting, setSubmitting] = useBooleanToggle(false);
	const [goTypes, setGoTypes] = useState('');
	const [errors, setErrors] = useState<Error[]>([]);
	const [generateSettings, setGenerateSettings] = useState<GenerateTypesConfig>();

	const clearErrors = () => setErrors([]);

	const clearState = () => {
		setJSONPayload('');
		setSubmitting(false);
		setGoTypes('');
		clearErrors();
	};

	const fetchGoTypes = useCallback(
		(data?: string) => {
			setSubmitting(true);
			generateTypes(data ?? jsonPayload, generateSettings)
				.then((res) => (typeof res === 'string' ? setGoTypes(res) : setErrors(res.errors)))
				.finally(() => setSubmitting(false));
		},
		[jsonPayload, generateSettings]
	);

	return {
		jsonPayload,
		setJSONPayload,
		submitting,
		goTypes,
		fetchGoTypes,
		errors,
		clearState,
		clearErrors,
		generateSettings,
		setGenerateSettings,
	} as const;
};

export default useGenerateTypes;
