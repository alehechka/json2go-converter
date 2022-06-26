import { Button, Group } from '@mantine/core';
import generateTypes from './api/generateTypes';
import ThemeToggle from './components/ThemeToggle';

function App() {
	return (
		<Group position='center' my='xl'>
			<ThemeToggle />
			<Button onClick={() => generateTypes({ idk: 'somethign' })}>Generate</Button>
		</Group>
	);
}

export default App;
