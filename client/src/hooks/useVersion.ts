import { useBooleanToggle } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import getVersion from '../api/getVersion';

const useVersion = () => {
	const [version, setVersion] = useState<string>('');
	const [fetching, setFetching] = useBooleanToggle(false);

	useEffect(() => {
		setFetching(true);
		getVersion()
			.then(setVersion)
			.finally(() => setFetching(false));
	}, []);

	return [version, fetching] as const;
};

export default useVersion;
