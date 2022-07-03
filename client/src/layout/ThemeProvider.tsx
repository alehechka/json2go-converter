import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme, useLocalStorage, useToggle } from '@mantine/hooks';
import { ReactNode, useEffect } from 'react';

type Props = {
	children?: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
	const defaultColorScheme = useColorScheme();
	const [localColorScheme, setLocalColorScheme] = useLocalStorage<ColorScheme>({ key: 'json2go:colorScheme' });
	const [colorScheme, toggleColorScheme] = useToggle<ColorScheme>(localColorScheme || defaultColorScheme, [
		'dark',
		'light',
	]);

	useEffect(() => {
		setLocalColorScheme(colorScheme);
	}, [colorScheme]);

	return (
		<MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				{children}
			</ColorSchemeProvider>
		</MantineProvider>
	);
};

export default ThemeProvider;
