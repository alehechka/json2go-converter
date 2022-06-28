import { AppShell } from '@mantine/core';
import JSON2Go from '../components/JSON2Go';
import AppHeader from './AppHeader';

const App = () => {
	return (
		<AppShell padding='md' header={<AppHeader />}>
			<JSON2Go />
		</AppShell>
	);
};

export default App;
