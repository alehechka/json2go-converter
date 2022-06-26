import { useMantineColorScheme, SegmentedControl, Center, Box } from '@mantine/core';
import { BiSun as Sun, BiMoon as Moon } from 'react-icons/bi';

const ThemeToggle = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<Box>
			<SegmentedControl
				value={colorScheme}
				onChange={() => toggleColorScheme()}
				data={[
					{
						value: 'light',
						label: (
							<Center>
								<Sun size={16} />
								<Box ml={10}>Light</Box>
							</Center>
						),
					},
					{
						value: 'dark',
						label: (
							<Center>
								<Moon size={16} />
								<Box ml={10}>Dark</Box>
							</Center>
						),
					},
				]}
			/>
		</Box>
	);
};

export default ThemeToggle;
