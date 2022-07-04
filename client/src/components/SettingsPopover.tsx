import { Popover, TextInput, ActionIcon, Container, Stack, Autocomplete, Text, Checkbox } from '@mantine/core';
import { useBooleanToggle, useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';
import { BsGear as Settings } from 'react-icons/bs';
import { GenerateTypesConfig } from '../api/generateTypes';
import useDefaults from '../hooks/useDefaults';
import useTimeFormats from '../hooks/useTimeFormats';

type Props = {
	onChange?: (values: GenerateTypesConfig) => void;
};

const SettingsPopover = ({ onChange }: Props) => {
	const [defaults] = useDefaults();
	const [timeFormats] = useTimeFormats();

	const [popoverOpen, setPopoverOpen] = useBooleanToggle(false);
	const [packageName, setPackageName] = useLocalStorage({ key: 'json2go:packageName' });
	const [root, setRoot] = useLocalStorage({ key: 'json2go:root' });
	const [outputFile, setOutputFile] = useLocalStorage({ key: 'json2go:outputFile' });
	const [timeFormat, setTimeFormat] = useLocalStorage({ key: 'json2go:timeFormat' });
	const [alphabetical, setAlphabetical] = useLocalStorage({
		key: 'json2go:alphabetical',
		defaultValue: defaults?.alphabetical,
	});
	const [omitempty, setOmitempty] = useLocalStorage({ key: 'json2go:omitempty', defaultValue: defaults?.omitempty });

	useEffect(() => {
		onChange?.({ packageName, root, outputFile, timeFormat, alphabetical, omitempty });
	}, [packageName, root, outputFile, timeFormat, alphabetical, omitempty]);

	return (
		<Popover
			opened={popoverOpen}
			onClose={() => setPopoverOpen(false)}
			position='bottom'
			placement='end'
			target={
				<ActionIcon size={36} radius='xl' onClick={() => setPopoverOpen(true)}>
					<Settings size={20} />
				</ActionIcon>
			}
		>
			<Container>
				<Stack spacing='xs'>
					<TextInput
						label='Package Name'
						value={packageName}
						onChange={(e) => setPackageName(e.target.value)}
						placeholder={defaults?.packageName}
					/>
					<TextInput
						label='Root Object Name'
						value={root}
						onChange={(e) => setRoot(e.target.value)}
						placeholder={defaults?.root}
					/>
					<TextInput
						label='Output File Name'
						value={outputFile}
						onChange={(e) => setOutputFile(e.target.value)}
						placeholder={defaults?.outputFile}
					/>
					<Autocomplete
						label='Time Format'
						description={
							<Text variant='link' component='a' size='xs' href='https://pkg.go.dev/time#Parse'>
								See docs for more details
							</Text>
						}
						placeholder={defaults?.timeFormat}
						data={Object.keys(timeFormats)}
						value={timeFormat}
						onChange={setTimeFormat}
					/>
					<Checkbox
						label='Sort alphabetically'
						checked={alphabetical === 'true'}
						onChange={(event) => setAlphabetical(event?.currentTarget.checked ? 'true' : 'false')}
					/>
					<Checkbox
						label='Omit Empty tags'
						checked={omitempty === 'true'}
						onChange={(event) => setOmitempty(event?.currentTarget.checked ? 'true' : 'false')}
					/>
				</Stack>
			</Container>
		</Popover>
	);
};

export default SettingsPopover;
