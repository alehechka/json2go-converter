import { useBooleanToggle } from '@mantine/hooks';
import { useCallback, useState } from 'react';
import { Error } from '../api/errors';
import generateTypes from '../api/generateTypes';

const useGenerateTypes = () => {
	const [jsonPayload, setJSONPayload] = useState('');
	const [submitting, setSubmitting] = useBooleanToggle(false);
	const [goTypes, setGoTypes] = useState('');
	const [errors, setErrors] = useState<Error[]>([]);

	const clearErrors = () => setErrors([]);

	const clearState = () => {
		setJSONPayload('');
		setSubmitting(false);
		setGoTypes('');
		clearErrors();
	};

	const fetchGoTypes = useCallback(() => {
		setSubmitting(true);
		generateTypes(jsonPayload)
			.then((res) => (typeof res === 'string' ? setGoTypes(res) : setErrors(res.errors)))
			.finally(() => setSubmitting(false));
	}, [jsonPayload]);

	return { jsonPayload, setJSONPayload, submitting, goTypes, fetchGoTypes, errors, clearState, clearErrors } as const;
};

export default useGenerateTypes;
