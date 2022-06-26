import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme, useToggle } from '@mantine/hooks';
import { FC, ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

const ThemeProvider: FC<Props> = ({ children }) => {
	const defaultColorScheme = useColorScheme();
	const [colorScheme, toggleColorScheme] = useToggle<ColorScheme>(defaultColorScheme, ['dark', 'light']);

	return (
		<MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				{children}
			</ColorSchemeProvider>
		</MantineProvider>
	);
};

export default ThemeProvider;
