import { ActionIcon, Button, Container, Group, Popover, TextInput } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { useCallback, useState } from 'react';
import { BiLink as Link } from 'react-icons/bi';
import useFetchURL from '../hooks/useFetchURL';

type Props = {
	onSubmit: (data: string) => void;
};

const URLFetchPopover = ({ onSubmit }: Props) => {
	const [popoverOpen, setPopoverOpen] = useBooleanToggle(false);
	const [url, setURL] = useState<string>('');
	const [fetchURL, fetching, hasError, clearError] = useFetchURL();

	const handleSubmit = useCallback(() => {
		fetchURL(url).then((data) => {
			onSubmit(data);
			setPopoverOpen(false);
		});
	}, [url]);

	return (
		<Popover
			opened={popoverOpen}
			onClose={() => setPopoverOpen(false)}
			position='bottom'
			placement='end'
			target={
				<ActionIcon size={36} radius='xl' onClick={() => setPopoverOpen(true)}>
					<Link size={20} />
				</ActionIcon>
			}
		>
			<Container>
				<Group spacing='xs'>
					<TextInput
						label='External URL'
						value={url}
						onChange={(e) => setURL(e.target.value)}
						placeholder='https://example.com'
						onKeyUp={(event) => {
							if (event.key === 'Enter') {
								handleSubmit();
							}
						}}
						onFocus={clearError}
						error={hasError && 'Failed to fetch resource from URL'}
						disabled={fetching}
					/>
					<Button mt={hasError ? 2 : 26} onClick={handleSubmit} disabled={!url} loading={fetching}>
						Fetch
					</Button>
				</Group>
			</Container>
		</Popover>
	);
};

export default URLFetchPopover;
