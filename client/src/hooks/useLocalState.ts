import { useState, useEffect, useCallback } from 'react';

const createKey = (key: string) => `json2go:${key}`;

const setLocalStorage = (key: string, value?: string) =>
	value ? localStorage.setItem(createKey(key), value) : deleteLocalStorage(key);

const deleteLocalStorage = (key: string) => localStorage.removeItem(createKey(key));

const getLocalStorage = (key: string) => localStorage.getItem(createKey(key)) ?? undefined;

const useLocalState = (key: string, defaultValue?: string) => {
	const [value, setValue] = useState<string | undefined>(defaultValue);

	useEffect(() => {
		const localValue = getLocalStorage(key);

		localValue ? setValue(localValue) : setLocalStorage(key, defaultValue);
	}, []);

	const updateLocalStorage = useCallback(() => {
		setLocalStorage(key, value);
	}, [key, value]);

	return [value, setValue, updateLocalStorage] as const;
};

export default useLocalState;
