import { ActionIcon, Button, Container, Grid, Group, JsonInput, List } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { BiDownload as Download } from 'react-icons/bi';
import fileDownload from 'js-file-download';
import useGenerateTypes from '../hooks/useGenerateTypes';

function JSON2Go() {
	const { jsonPayload, setJSONPayload, submitting, goTypes, fetchGoTypes, errors, clearState, clearErrors } =
		useGenerateTypes();

	return (
		<Container>
			<Grid justify='flex-end' mr={0}>
				<Group position='center' my='xl'>
					<Button onClick={fetchGoTypes} loading={submitting}>
						Generate
					</Button>
					<Button color='red' variant='light' onClick={clearState}>
						Clear
					</Button>
				</Group>
			</Grid>
			<JsonInput
				label='JSON Payload'
				placeholder='Textarea will autosize to fit the content'
				validationError='Invalid json format'
				autosize
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
						onClick={() => fileDownload(goTypes, 'types.go', 'text/go; charset=utf-8')}
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
