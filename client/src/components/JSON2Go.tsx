import { ActionIcon, Button, Container, Grid, Group, JsonInput, List } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { BiDownload as Download } from 'react-icons/bi';
import fileDownload from 'js-file-download';
import useGenerateTypes from '../hooks/useGenerateTypes';
import SettingsPopover from './SettingsPopover';
import URLFetchPopover from './URLFetchPopover';

function JSON2Go() {
	const {
		jsonPayload,
		setJSONPayload,
		submitting,
		goTypes,
		fetchGoTypes,
		errors,
		clearState,
		clearErrors,
		generateSettings,
		setGenerateSettings,
	} = useGenerateTypes();

	return (
		<Container>
			<Grid justify='flex-end' mr={0}>
				<Group position='center' my='xl'>
					<Button onClick={() => fetchGoTypes()} loading={submitting}>
						Generate
					</Button>
					<Button color='red' variant='light' onClick={clearState}>
						Clear
					</Button>
					<URLFetchPopover
						onSubmit={(data) => {
							setJSONPayload(data);
							fetchGoTypes(data);
						}}
					/>
					<SettingsPopover onChange={setGenerateSettings} />
				</Group>
			</Grid>
			<JsonInput
				label='JSON Payload'
				validationError='Invalid json format'
				minRows={20}
				required
				value={jsonPayload}
				onChange={setJSONPayload}
				onFocus={clearErrors}
			/>

			{errors.length > 0 && (
				<List withPadding styles={(theme) => ({ root: { color: theme.colors.red[6], fontSize: 14 } })}>
					{errors.map((error, index) => (
						<List.Item key={index}>{error.detail}</List.Item>
					))}
				</List>
			)}

			<Grid justify='flex-end' mt={15} mr={0}>
				<Group>
					<ActionIcon
						onClick={() => fileDownload(goTypes, generateSettings?.outputFile ?? 'types.go', 'text/go; charset=utf-8')}
						disabled={!!!goTypes}
						radius='xl'
						variant='light'
						color='blue'
						size={36}
					>
						<Download size={20} />
					</ActionIcon>
				</Group>
			</Grid>
			<Prism language='go' mt={15} mb={15}>
				{goTypes || '// Waiting for generation...'}
			</Prism>
		</Container>
	);
}

export default JSON2Go;
