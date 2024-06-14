import { Box, Button, Grid, Typography } from '@mui/material';
import { useAppDispatch } from '../../../../store/hooks';
import { showModalObservation } from '../../../../store/modules/ContextObservation/contextObservationSlice';
import { ModalObservation } from './ModalClient';

interface DisabledButton {
	disabled: boolean;
	setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
	observation: string;
	setObservation: React.Dispatch<React.SetStateAction<string>>;
}

export const Observation = ({
	disabled,
	setDisabled,
	observation,
	setObservation,
}: DisabledButton) => {
	const dispatch = useAppDispatch();

	return (
		<>
			<Grid
				container
				spacing={{ xs: 2, sm: 2, md: 4 }}
				columns={{ xs: 12, sm: 12, md: 12 }}
				sx={{
					borderLeft: '1px solid #000',
					borderRight: '1px solid #000',
					borderBottom: '1px solid #000',
				}}
			>
				<Grid
					item
					xs={12}
					sm={12}
					md={12}
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
						}}
					>
						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '12px',
								fontWeight: 700,
							}}
						>
							Informações complementares: {observation}
						</Typography>
					</Box>
				</Grid>
				<Button
					disabled={disabled}
					sx={{
						mt: 3,
					}}
					onClick={() => {
						setDisabled(true);
						dispatch(showModalObservation('createObservation'));
					}}
				>
					Add
				</Button>
			</Grid>
			<ModalObservation
				observation={observation}
				setObservation={setObservation}
			/>
		</>
	);
};
