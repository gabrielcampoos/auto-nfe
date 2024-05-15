import {
	Box,
	Button,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { FirstLineSm } from './FirstLineSm';
import { useState } from 'react';
import { useAppDispatch } from '../../../../store/hooks';
import { showModalFirstLine } from '../../../../store/modules/ContextModalFirstLine/contextSliceFirstLine';
import { ModalClientFirstLine } from './ModalClient';

interface DisabledButton {
	disabledFirstLine: boolean;
	setDisabledFirstLine: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FirstLine = ({
	disabledFirstLine,
	setDisabledFirstLine,
}: DisabledButton) => {
	const [name, setName] = useState('');
	const [socialReason, setSocialReason] = useState('');
	const [address, setAddress] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [cnpj, setCnpj] = useState('');
	const [number, setNumber] = useState('');

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const dispatch = useAppDispatch();

	const newData = new Date();
	const dataFormatada =
		newData.getDate() +
		'/' +
		(newData.getMonth() + 1) +
		'/' +
		newData.getFullYear();

	return (
		<>
			{(smDown && (
				<>
					<FirstLineSm
						disabledFirstLine={disabledFirstLine}
						setDisabledFirstLine={setDisabledFirstLine}
					/>
				</>
			)) || (
				<>
					<Grid
						container
						spacing={{ xs: 2, sm: 2, md: 4 }}
						columns={{ xs: 12, sm: 12, md: 12 }}
						sx={{
							border: '1px solid #000',
						}}
					>
						<Grid
							item
							xs={6}
							sm={6}
							md={6}
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Box
								sx={{
									width: '50%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Typography
									component="h1"
									variant="h5"
									sx={{
										textDecoration: 'underline',
									}}
								>
									{name}
								</Typography>
							</Box>

							<Box
								sx={{
									width: '50%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
									gap: 2,
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '14px',
									}}
								>
									{socialReason}
								</Typography>
								<Typography
									component="p"
									variant="subtitle1"
									sx={{
										fontSize: '12px',
									}}
								>
									{address}
									<br />
									CEP: {zipCode}
								</Typography>
								<Typography
									component="p"
									variant="subtitle1"
									sx={{
										fontSize: '12px',
									}}
								>
									CNPJ: {cnpj}
								</Typography>
							</Box>
						</Grid>

						<Grid
							item
							xs={6}
							sm={6}
							md={6}
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								borderLeft: '1px solid #000',
							}}
						>
							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
									gap: 2,
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '14px',
									}}
								>
									FATURA DE LOCAÇÃO
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '14px',
									}}
								>
									N°: 00001
								</Typography>

								<Typography
									component="p"
									variant="subtitle1"
									sx={{
										fontSize: '12px',
									}}
								>
									Emissão: {`${dataFormatada}`}
								</Typography>
							</Box>
						</Grid>
						<Button
							disabled={disabledFirstLine}
							sx={{
								width: '50%',
								justifyContent: 'flex-start',
								alignItems: 'center',
								pl: 2,
								borderRight: '1px solid #000',
								borderRadius: '0',
								ml: 0.2,
							}}
							onClick={() => {
								setDisabledFirstLine(true);
								dispatch(showModalFirstLine('createFirstLine'));
							}}
						>
							add
						</Button>
					</Grid>
					<ModalClientFirstLine
						name={name}
						setName={setName}
						socialReason={socialReason}
						setSocialReason={setSocialReason}
						address={address}
						setAddress={setAddress}
						zipCode={zipCode}
						setZipCode={setZipCode}
						cnpj={cnpj}
						setCnpj={setCnpj}
						number={number}
						setNumber={setNumber}
					/>
				</>
			)}
		</>
	);
};
