import {
	Box,
	Button,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useAppDispatch } from '../../../../store/hooks';
import { showModal } from '../../../../store/modules/ContextModal/contextSlice';
import { ModalClientSecondLine } from './ModalClient';
import { useState } from 'react';
import { SecondLineSm } from './SecondLineSm';

interface DisabledButton {
	disabledSecondLine: boolean;
	setDisabledSecondLine: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SecondLine = ({
	disabledSecondLine,
	setDisabledSecondLine,
}: DisabledButton) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const [name, setName] = useState('');
	const [cpf, setCpf] = useState('');
	const [address, setAddress] = useState('');
	const [district, setDistrict] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [uf, setUf] = useState('');
	const [city, setCity] = useState('');
	const [municipalRegistration, setMunicipalRegistration] = useState('');
	const [phone, setPhone] = useState('');

	const dispatch = useAppDispatch();

	return (
		<>
			{(smDown && (
				<>
					<SecondLineSm
						disabledSecondLine={disabledSecondLine}
						setDisabledSecondLine={setDisabledSecondLine}
					/>
				</>
			)) || (
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
									mb: 2,
									pt: 2,
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
									DESTINATÁRIO
								</Typography>
							</Box>

							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										flex: 0.5,
									}}
								>
									Razão Social / Nome Cliente:
									<br />
									{name}
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										flex: 0.5,
									}}
								>
									CNPJ / CPF:
									<br />
									{cpf}
								</Typography>
							</Box>

							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									mt: 3,
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										flex: 1,
									}}
								>
									Endereço:
									<br />
									{address}
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										flex: 0.4,
									}}
								>
									Bairro:
									<br />
									{district}
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										flex: 0.4,
									}}
								>
									CEP:
									<br />
									{zipCode}
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										flex: 0.2,
									}}
								>
									UF:
									<br />
									{uf}
								</Typography>
							</Box>

							<Box
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									mt: 3,
								}}
							>
								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										textAlign: 'start',
										flex: 1,
									}}
								>
									Cidade:
									<br />
									{city}
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										textAlign: 'start',
										flex: 0.6,
									}}
								>
									Inscrição Estadual:
									<br />
									{municipalRegistration}
								</Typography>

								<Typography
									component="h1"
									variant="h6"
									sx={{
										fontSize: '12px',
										flex: 0.4,
									}}
								>
									Telefone:
									<br />
									{phone}
								</Typography>
							</Box>
						</Grid>
						<Button
							disabled={disabledSecondLine}
							onClick={() => {
								setDisabledSecondLine(true);
								dispatch(showModal('create'));
							}}
						>
							add
						</Button>
					</Grid>
					<ModalClientSecondLine
						name={name}
						setName={setName}
						cpf={cpf}
						setCpf={setCpf}
						address={address}
						setAddress={setAddress}
						district={district}
						setDistrict={setDistrict}
						zipCode={zipCode}
						setZipCode={setZipCode}
						uf={uf}
						setUf={setUf}
						city={city}
						setCity={setCity}
						municipalRegistration={municipalRegistration}
						setMunicipalRegistration={setMunicipalRegistration}
						phone={phone}
						setPhone={setPhone}
					/>
				</>
			)}
		</>
	);
};
