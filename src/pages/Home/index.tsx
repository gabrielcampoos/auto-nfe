import { Box, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { FirstLine } from './components/FirstLine';
import { SecondLine } from './components/SecondLine';
import { FourthLine } from './components/FourthLine';
import { FifthLine } from './components/FifthLine';
import { SixthLine } from './components/SixthLine';
import generatePDF, { Margin, Options } from 'react-to-pdf';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getUser, updateCount } from '../../store/modules/User/userSlice';

export const Nfe = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const [disabledFirstLine, setDisabledFirstLine] = useState(false);
	const [disabledSecondLine, setDisabledSecondLine] = useState(false);
	const [disabledFifthLine, setDisabledFifhtLine] = useState(false);
	const [disabledSixthLine, setDisabledSixthLine] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [widthPdf, setWidthPdf] = useState('100%');
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	const [socialReason, setSocialReason] = useState('');
	const [address, setAddress] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [cnpj, setCnpj] = useState('');
	const [number, setNumber] = useState('');

	const [nameClient, setNameClient] = useState('');
	const [cpfClient, setCpfClient] = useState('');
	const [addressClient, setAddressClient] = useState('');
	const [districtClient, setDistrictClient] = useState('');
	const [zipCodeClient, setZipCodeClient] = useState('');
	const [ufClient, setUfClient] = useState('');
	const [cityClient, setCityClient] = useState('');
	const [municipalRegistrationClient, setMunicipalRegistrationClient] =
		useState('');
	const [phoneClient, setPhoneClient] = useState('');

	const dispatch = useAppDispatch();

	const userLogged = useAppSelector((user) => user.user.user);

	useEffect(() => {
		dispatch(getUser());
		const number = Number(localStorage.getItem('count'));
		setCount(number + 1);
		if (!localStorage.getItem('count')) {
			console.log(0);
		}
	}, [dispatch]);

	const targetRef = () => document.getElementById('targetRef');

	const options: Options = {
		method: 'save',

		page: {
			// margin is in MM, default is Margin.NONE = 0
			margin: Margin.SMALL,
			// default is 'A4'
			format: 'A4',
			// default is 'portrait'
			orientation: 'portrait',
		},
	};

	return (
		<>
			{(smDown && (
				<>
					<Container
						sx={{
							width: widthPdf,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: '100%',
								height: '100vh',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								pt: 12,
							}}
						>
							<Container
								id="targetRef"
								disableGutters
								sx={{
									width: '100%',
									pl: 4,
									pt: 6,
								}}
							>
								<FirstLine
									disabledFirstLine={disabledFirstLine}
									setDisabledFirstLine={setDisabledFirstLine}
									count={count}
									setCount={setCount}
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
								<SecondLine
									disabledSecondLine={disabledSecondLine}
									setDisabledSecondLine={
										setDisabledSecondLine
									}
									nameClient={nameClient}
									cpfClient={cpfClient}
									addressClient={addressClient}
									districtClient={districtClient}
									zipCodeClient={zipCodeClient}
									ufClient={ufClient}
									cityClient={cityClient}
									municipalRegistrationClient={
										municipalRegistrationClient
									}
									phoneClient={phoneClient}
									setNameClient={setNameClient}
									setCpfClient={setCpfClient}
									setAddressClient={setAddressClient}
									setDistrictClient={setDistrictClient}
									setZipCodeClient={setZipCodeClient}
									setUfClient={setUfClient}
									setCityClient={setCityClient}
									setMunicipalRegistrationClient={
										setMunicipalRegistrationClient
									}
									setPhoneClient={setPhoneClient}
								/>

								<FourthLine
									disabled={disabled}
									setDisabled={setDisabled}
								/>
								<FifthLine
									disabledFifthLine={disabledFifthLine}
									setDisabledFifthLine={setDisabledFifhtLine}
								/>
								<SixthLine
									disabled={disabledSixthLine}
									setDisabled={setDisabledSixthLine}
									count={count}
									setCount={setCount}
								/>
								<Box
									sx={{
										width: '100%',
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
									}}
								>
									<Button
										onClick={() => {
											setWidthPdf('2480px');
											setTimeout(() => {
												generatePDF(targetRef, options);
												setCount(count + 1);
												dispatch(
													updateCount({
														username:
															userLogged.username,
														count: count,
													}),
												);
											}, 1000);
										}}
									>
										Download PDF
									</Button>

									<Button href="https://auto-generate.vercel.app">
										Gerar mensalmente
									</Button>
								</Box>
							</Container>
						</Box>
					</Container>
				</>
			)) || (
				<>
					<Box
						sx={{
							width: '100%',
							height: '100vh',
						}}
					>
						<Container
							id="targetRef"
							disableGutters
							sx={{
								pt: 5,
								pl: 4,
							}}
						>
							<FirstLine
								disabledFirstLine={disabledFirstLine}
								setDisabledFirstLine={setDisabledFirstLine}
								count={count}
								setCount={setCount}
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
							<SecondLine
								disabledSecondLine={disabledSecondLine}
								setDisabledSecondLine={setDisabledSecondLine}
								nameClient={nameClient}
								cpfClient={cpfClient}
								addressClient={addressClient}
								districtClient={districtClient}
								zipCodeClient={zipCodeClient}
								ufClient={ufClient}
								cityClient={cityClient}
								municipalRegistrationClient={
									municipalRegistrationClient
								}
								phoneClient={phoneClient}
								setNameClient={setNameClient}
								setCpfClient={setCpfClient}
								setAddressClient={setAddressClient}
								setDistrictClient={setDistrictClient}
								setZipCodeClient={setZipCodeClient}
								setUfClient={setUfClient}
								setCityClient={setCityClient}
								setMunicipalRegistrationClient={
									setMunicipalRegistrationClient
								}
								setPhoneClient={setPhoneClient}
							/>

							<FourthLine
								disabled={disabled}
								setDisabled={setDisabled}
							/>
							<FifthLine
								disabledFifthLine={disabledFifthLine}
								setDisabledFifthLine={setDisabledFifhtLine}
							/>
							<SixthLine
								disabled={disabledSixthLine}
								setDisabled={setDisabledSixthLine}
								count={count}
								setCount={setCount}
							/>
						</Container>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Button
								onClick={() => {
									generatePDF(targetRef, options);
									setTimeout(() => {
										setCount(count + 1);
										dispatch(
											updateCount({
												username: userLogged.username,
												count: count,
											}),
										);
									}, 1000);
								}}
							>
								Download PDF
							</Button>
							<Button
								href="https://auto-generate.vercel.app"
								onClick={() => {
									localStorage.setItem('dataCompany', name);
									localStorage.setItem(
										'dataCompany',
										socialReason,
									);
									localStorage.setItem(
										'dataCompany',
										address,
									);
									localStorage.setItem(
										'dataCompany',
										zipCode,
									);
									localStorage.setItem('dataCompany', cnpj);
									localStorage.setItem('dataCompany', number);

									localStorage.setItem(
										'dataClient',
										nameClient,
									);
									localStorage.setItem(
										'dataClient',
										cpfClient,
									);
									localStorage.setItem(
										'dataClient',
										addressClient,
									);
									localStorage.setItem(
										'dataClient',
										districtClient,
									);
									localStorage.setItem(
										'dataClient',
										zipCodeClient,
									);
									localStorage.setItem(
										'dataClient',
										ufClient,
									);
									localStorage.setItem(
										'dataClient',
										cityClient,
									);
									localStorage.setItem(
										'dataClient',
										municipalRegistrationClient,
									);
									localStorage.setItem(
										'dataClient',
										phoneClient,
									);
								}}
							>
								Gerar mensalmente
							</Button>
						</Box>
					</Box>
				</>
			)}
		</>
	);
};
