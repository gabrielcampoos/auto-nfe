import { Box, Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../../../../../store/hooks';
import { showModalFifthLine } from '../../../../../store/modules/ContextModalFifthLine/contextSliceFifthLine';
import { ModalClientFifthLine } from '../ModalClient';

interface DisabledButton {
	disabledFifthLine: boolean;
	setDisabledFifthLine: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FifthLineSm = ({
	disabledFifthLine,
	setDisabledFifthLine,
}: DisabledButton) => {
	const [formOfPayment, setFormOfPayment] = useState('');
	const [value, setValue] = useState('');
	const [maturity, setMaturity] = useState('');

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
							pt: 2,
							pb: 4,
						}}
					>
						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '10px',
								fontWeight: 600,
							}}
						>
							FORMA DE PAGAMENTO: {formOfPayment}: R$ {value}{' '}
							VENCIMENTO: {maturity}
							{/* Lei nº 8.846, de 1994, art, 1º, Locação de
									bens móveis. Comprovação de receita.
									Impossibilidade de emissão de nota fiscal. O
									auferimento de receitas pelas pessoas
									jurídicas, quando desobrigadas ou
									impossibilitadas de emissão de nota fiscal
									ou documento equivalente, em razão da
									não-autorização para impressão pelo órgão
									competente, deve ser comprovado com
									documentos de indiscutível idoneidade e
									conteúdo esclarecedor das operações a que se
									refiram, tais como recibos, livros de
									registro, contratos etc, desde que a lei não
									imponha forma especial. */}
						</Typography>
					</Box>
				</Grid>
				<Button
					disabled={disabledFifthLine}
					onClick={() => {
						setDisabledFifthLine(true);
						dispatch(showModalFifthLine('createFifthLine'));
					}}
				>
					add
				</Button>
			</Grid>
			<ModalClientFifthLine
				formOfPayment={formOfPayment}
				setFormOfPayment={setFormOfPayment}
				value={value}
				setValue={setValue}
				maturity={maturity}
				setMaturity={setMaturity}
			/>
		</>
	);
};
