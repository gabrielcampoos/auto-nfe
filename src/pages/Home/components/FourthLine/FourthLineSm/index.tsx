import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { ModalClientFourthLine } from '../ModalClient';
import { TextType } from '../../../../../store/types';
import { useAppDispatch } from '../../../../../store/hooks';
import { showModalFourthLine } from '../../../../../store/modules/ContextModalFourthLine/contextSliceFourthLine';

interface DisabledButton {
	disabled: boolean;
	setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FourthLineSm = ({ disabled, setDisabled }: DisabledButton) => {
	const [item, setItem] = useState(0);
	const [text, setText] = useState('');
	const [address, setAddress] = useState('');
	const [value, setValue] = useState(0);

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
								fontSize: '8px',
							}}
						>
							DADOS DA LOCAÇÃO
						</Typography>
					</Box>
				</Grid>
				<Container disableGutters>
					<Grid
						item
						xs={12}
						sm={12}
						md={12}
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-around',
						}}
					>
						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '8px',
								borderTop: '1px solid #000',
								flex: 1,
								textAlign: 'center',
							}}
						>
							Código
						</Typography>

						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '8px',
								borderTop: '1px solid #000',
								borderLeft: '1px solid #000',
								flex: 1,
								textAlign: 'center',
							}}
						>
							Descrição / Configuração
						</Typography>

						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '8px',
								borderTop: '1px solid #000',
								borderLeft: '1px solid #000',
								flex: 1,
								textAlign: 'center',
							}}
						>
							Quantidade / Valor Unitário
						</Typography>

						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '8px',
								borderTop: '1px solid #000',
								borderLeft: '1px solid #000',
								flex: 1,
								textAlign: 'center',
							}}
						>
							Valor Total
						</Typography>
					</Grid>
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-around',
						}}
					>
						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '8px',
								borderTop: '1px solid #000',
								borderBottom: '1px solid #000',
								borderRight: '1px solid #000',
								flex: 1,
								textAlign: 'center',
							}}
						>
							{item}
						</Typography>

						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '8px',
								borderBottom: '1px solid #000',
								borderTop: '1px solid #000',
								flex: 1,
								textAlign: 'center',
							}}
						>
							{text}
						</Typography>

						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '8px',
								borderTop: '1px solid #000',
								borderBottom: '1px solid #000',
								borderLeft: '1px solid #000',
								flex: 1,
								textAlign: 'center',
							}}
						>
							{address}
						</Typography>

						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '8px',
								borderTop: '1px solid #000',
								borderBottom: '1px solid #000',
								borderLeft: '1px solid #000',
								flex: 1,
								textAlign: 'center',
							}}
						>
							R$ {value}
						</Typography>
					</Box>
				</Container>
				<Button
					size="small"
					disabled={disabled}
					onClick={() => {
						setDisabled(true);
						dispatch(showModalFourthLine('createFourthLine'));
					}}
				>
					Add
				</Button>
			</Grid>
			<ModalClientFourthLine
				item={item}
				setItem={setItem}
				text={text}
				setText={setText}
				address={address}
				setAddress={setAddress}
				value={value}
				setValue={setValue}
			/>
		</>
	);
};
