import { useBooleanToggle } from '@mantine/hooks';
import { useCallback, useEffect, useState } from 'react';
import getDefaults, { Defaults } from '../api/getDefaults';

const useDefaults = () => {
	const [defaults, setDefaults] = useState<Defaults>();
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
