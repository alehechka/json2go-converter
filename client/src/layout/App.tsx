import { AppShell, Header, Grid, Title, Image } from '@mantine/core';
import JSON2Go from '../components/JSON2Go';
import ThemeToggle from '../components/ThemeToggle';

const App = () => {
	return (
		<AppShell
			padding='md'
			header={
				<Header height={60} p='md'>
					<Grid justify='space-between'>
						<Image src='/assets/json2go-logo.png' alt='json2go' width={200} height={50} fit='contain' />
						<ThemeToggle />
					</Grid>
				</Header>
			}
		>
			<JSON2Go />
		</AppShell>
	);
};

export default App;
