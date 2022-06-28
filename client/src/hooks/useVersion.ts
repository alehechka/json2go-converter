import { useBooleanToggle } from '@mantine/hooks';
import { useCallback, useEffect, useState } from 'react';
import getVersion from '../api/getVersion';

const useVersion = () => {
	const [version, setVersion] = useState<string>('');
	const [fetching, setFetching] = useBooleanToggle(true);

	const fetchVersion = useCallback(() => {
		setFetching(true);
		getVersion()
			.then(setVersion)
			.finally(() => setFetching(false));
	}, []);

	useEffect(() => {
		fetchVersion();
	}, []);

	return [version, fetching, fetchVersion] as const;
};

export default useVersion;
