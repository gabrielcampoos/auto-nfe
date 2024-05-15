import { Box, Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../../../../../store/hooks';
import { showModalSixthLine } from '../../../../../store/modules/ContextModalSixthLine/contextSliceSixthLine';

interface DisabledButton {
	disabled: boolean;
	setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SixthLineSm = ({ disabled, setDisabled }: DisabledButton) => {
	const [value, setValue] = useState('');

	const dispatch = useAppDispatch();

	return (
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
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderBottom: '1px solid #000',
						pt: 3,
						pb: 1,
					}}
				>
					<Typography
						component="h1"
						variant="h6"
						sx={{
							fontSize: '8px',
							fontWeight: 700,
						}}
					>
						OBSERVAÇÃO: Não incidência de ISSQN sobre locação de
						bens móveis decorrente do veto presidencial ao subitem
						3.01 da lista anexa a LC 116/2003.
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					pt: 4,
				}}
			>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						borderBottom: '1px solid #000',
					}}
				>
					<Button
						disabled={disabled}
						onClick={() => {
							setDisabled(true);
							dispatch(showModalSixthLine('createSixthLine'));
						}}
					>
						Add
					</Button>
					<Typography
						component="h1"
						variant="h6"
						sx={{
							fontSize: '8px',
							fontWeight: 700,
							flex: 0.4,
						}}
					>
						Valor Total da Fatura: R$ {value}
					</Typography>
				</Box>
			</Box>
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
				}}
			>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						pt: 1,
						pb: 1,
					}}
				>
					<Typography
						component="h1"
						variant="h6"
						sx={{
							fontSize: '8px',
							fontWeight: 700,
						}}
					>
						NÃO INCIDÊNCIA DE ISS LEI COMPLEMENTAR Nº 116, DE 31 DE
						JULHO DE 2003.
					</Typography>
				</Box>
			</Grid>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						width: '80%',
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						borderRight: '1px solid #000',
						borderTop: '1px solid #000',
					}}
				>
					<Typography
						component="h1"
						variant="h6"
						sx={{
							fontSize: '8px',
						}}
					>
						RECEBI(EMOS) DE EMPRESA, AS LOCAÇÕES CONSTANTES NESSA
						FATURA INDICADA AO LADO
					</Typography>
				</Box>

				<Box
					sx={{
						width: '20%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderTop: '1px solid #000',
					}}
				>
					<Typography
						component="h1"
						variant="h6"
						sx={{
							fontSize: '8px',
						}}
					>
						FATURA DE LOCAÇÃO
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderTop: '1px solid #000',
				}}
			>
				<Box
					sx={{
						width: '50%',
						height: '100%',
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						borderRight: '1px solid #000',
					}}
				>
					<Typography
						component="h1"
						variant="h6"
						sx={{
							fontSize: '8px',
							pl: 4,
							mb: 3,
						}}
					>
						DATA DO RECEBIMENTO
					</Typography>
				</Box>

				<Box
					sx={{
						width: '50%',
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						borderRight: '1px solid #000',
					}}
				>
					<Typography
						component="h1"
						variant="h6"
						sx={{
							fontSize: '8px',
							pl: 2,
							mb: 3,
						}}
					>
						IDENTIFICAÇÃO E ASSINATURA DO RECEBIDOR
					</Typography>
				</Box>

				<Box
					sx={{
						width: '24.2%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography
						component="h1"
						variant="h6"
						sx={{
							fontSize: '8px',
							textAlign: 'center',
							mb: 3,
						}}
					>
						Nº 00001
					</Typography>
				</Box>
			</Box>
		</Grid>
	);
};
