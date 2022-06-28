import { AppShell, Header, Grid, Image, Group, Text, Loader, ActionIcon } from '@mantine/core';
import JSON2Go from '../components/JSON2Go';
import ThemeToggle from '../components/ThemeToggle';
import useVersion from '../hooks/useVersion';
import { BsGithub as Github } from 'react-icons/bs';

const App = () => {
	const [version, loading] = useVersion();

	return (
		<AppShell
			padding='md'
			header={
				<Header height={60} p='md'>
					<Grid justify='space-between'>
						<Group>
							<Image src='/assets/json2go-logo.png' alt='json2go' width={200} height={50} fit='contain' />
							{loading ? (
								<Loader variant='dots' />
							) : (
								<Text
									component='a'
									color='dimmed'
									href={`https://github.com/alehechka/json2go/releases/tag/${version}`}
								>
									{version}
								</Text>
							)}
						</Group>
						<Group>
							<ActionIcon component='a' href='https://github.com/alehechka/json2go-converter' radius='xl' size={28}>
								<Github size={20} />
							</ActionIcon>
							<ThemeToggle />
						</Group>
					</Grid>
				</Header>
			}
		>
			<JSON2Go />
		</AppShell>
	);
};

export default App;
