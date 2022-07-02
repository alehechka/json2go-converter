import { Header, Grid, Image, Group, Text, Loader, ActionIcon, MediaQuery, Menu, Divider } from '@mantine/core';
import ThemeToggle from '../components/ThemeToggle';
import useVersion from '../hooks/useVersion';
import { BsGithub as Github } from 'react-icons/bs';
import { BiGitCompare as GitCompare } from 'react-icons/bi';

const AppHeader = () => {
	const [version, loading] = useVersion();

	return (
		<Header height={60} p='md'>
			<Grid justify='space-between'>
				<Group>
					<Image src='/assets/json2go-logo.png' alt='json2go' width={200} height={50} fit='contain' />
					<MediaQuery smallerThan='xs' styles={{ display: 'none' }}>
						{loading ? (
							<Loader variant='dots' />
						) : (
							<Text component='a' color='dimmed' href={`https://github.com/alehechka/json2go/releases/tag/${version}`}>
								{version}
							</Text>
						)}
					</MediaQuery>
				</Group>
				<MediaQuery smallerThan='xs' styles={{ display: 'none' }}>
					<Group>
						<ActionIcon component='a' href='https://github.com/alehechka/json2go-converter' radius='xl' size={28}>
							<Github size={20} />
						</ActionIcon>
						<ThemeToggle />
					</Group>
				</MediaQuery>
				<MediaQuery largerThan='xs' styles={{ display: 'none' }}>
					<Menu mt={8}>
						<Menu.Item>
							<ThemeToggle />
						</Menu.Item>
						<Divider />
						<Menu.Item icon={<Github size={14} />} component='a' href='https://github.com/alehechka/json2go-converter'>
							Repository
						</Menu.Item>
						<Menu.Item
							icon={<GitCompare size={14} />}
							component='a'
							href={`https://github.com/alehechka/json2go/releases/tag/${version}`}
						>
							{loading ? <Loader variant='dots' /> : <Text color='dimmed'>{version}</Text>}
						</Menu.Item>
					</Menu>
				</MediaQuery>
			</Grid>
		</Header>
	);
};

export default AppHeader;
