import { Popover, TextInput, ActionIcon, Container, Stack } from '@mantine/core';
import { useBooleanToggle, useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';
import { BsGear as Settings } from 'react-icons/bs';
import { GenerateTypesConfig } from '../api/generateTypes';
import useDefaults from '../hooks/useDefaults';

type Props = {
	onChange?: (values: GenerateTypesConfig) => void;
};

const SettingsPopover = ({ onChange }: Props) => {
	const [popoverOpen, setPopoverOpen] = useBooleanToggle(false);
	const [packageName, setPackageName] = useLocalStorage({ key: 'json2go:packageName' });
	const [root, setRoot] = useLocalStorage({ key: 'json2go:root' });
	const [outputFile, setOutputFile] = useLocalStorage({ key: 'json2go:outputFile' });
	const [defaults] = useDefaults();

	useEffect(() => {
		onChange?.({ packageName, root, outputFile });
	}, [packageName, root, outputFile]);

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
				</Stack>
			</Container>
		</Popover>
	);
};

export default SettingsPopover;
