import { useBooleanToggle } from '@mantine/hooks';
import { useCallback, useEffect, useState } from 'react';
import getTimeFormats from '../api/getTimeFormats';

const useTimeFormats = () => {
	const [timeFormats, setTimeFormats] = useState<Record<string, string>>({});
	const [fetching, setFetching] = useBooleanToggle(true);

	const fetchTimeFormats = useCallback(() => {
		setFetching(true);
		getTimeFormats()
			.then((res) => setTimeFormats(res.formats))
			.finally(() => setFetching(false));
	}, []);

	useEffect(() => {
		fetchTimeFormats();
	}, []);

	return [timeFormats, fetching, fetchTimeFormats] as const;
};

export default useTimeFormats;
