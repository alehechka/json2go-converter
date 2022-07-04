import { useBooleanToggle } from '@mantine/hooks';
import getURL from '../api/getURL';

const useFetchURL = (): [
	fetchURL: (url: string) => Promise<string>,
	fetching: boolean,
	hasError: boolean,
	clearError: VoidFunction
] => {
	const [fetching, setFetching] = useBooleanToggle(false);
	const [hasError, setHasError] = useBooleanToggle(false);

	const fetchURL = (url: string) => {
		setFetching(true);
		return getURL(url)
			.catch((err) => {
				setHasError(true);
				throw err;
			})
			.finally(() => setFetching(false));
	};

	return [fetchURL, fetching, hasError, () => setHasError(false)];
};

export default useFetchURL;
