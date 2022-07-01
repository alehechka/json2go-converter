import { useBooleanToggle } from '@mantine/hooks';
import { useCallback, useEffect, useState } from 'react';
import getDefaults from '../api/getDefaults';

const useDefaults = () => {
	const [defaults, setDefaults] = useState<Record<string, string>>({});
	const [fetching, setFetching] = useBooleanToggle(true);

	const fetchDefaults = useCallback(() => {
		setFetching(true);
		getDefaults()
			.then(setDefaults)
			.finally(() => setFetching(false));
	}, []);

	useEffect(() => {
		fetchDefaults();
	}, []);

	return [defaults, fetching, fetchDefaults] as const;
};

export default useDefaults;
