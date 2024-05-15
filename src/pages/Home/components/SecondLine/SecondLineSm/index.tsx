import {
	Box,
	Button,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useAppDispatch } from '../../../../../store/hooks';
import { showModal } from '../../../../../store/modules/ContextModal/contextSlice';
import { ModalClientSecondLine } from '../ModalClient';
import { useState } from 'react';

interface DisabledButton {
	disabledSecondLine: boolean;
	setDisabledSecondLine: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SecondLineSm = ({
	disabledSecondLine,
	setDisabledSecondLine,
}: DisabledButton) => {
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
							justifyContent: 'center',
							alignItems: 'center',
							mb: 2,
						}}
					>
						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '12px',
							}}
						>
							DESTINATÁRIO
						</Typography>
					</Box>

					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-around',
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
							Razão Social / Nome Cliente:
							<br />
							{name}
						</Typography>

						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '8px',
							}}
						>
							CNPJ / CPF:
							<br />
							{cpf}
						</Typography>
					</Box>

					<Box
						sx={{
							width: '64%',
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							mt: 2,
							mb: 2,
						}}
					>
						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '8px',
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
								fontSize: '8px',
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
								fontSize: '8px',
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
								fontSize: '8px',
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
						}}
					>
						<Typography
							component="h1"
							variant="h6"
							sx={{
								fontSize: '8px',
								flex: 0.39,
								textAlign: 'end',
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
								fontSize: '8px',
								flex: 0.22,
								textAlign: 'start',
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
								fontSize: '8px',
								flex: 0.22,
								textAlign: 'start',
							}}
						>
							Telefone:
							<br />
							{phone}
						</Typography>
					</Box>
				</Grid>
				<Button
					size="small"
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
	);
};