import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
// import { ModalSignup } from '../ModalSignup';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { useNavigate } from 'react-router-dom';
import {
	hideLoading,
	showLoading,
} from '../../../../store/modules/Loading/loadingSlice';
import { showNotification } from '../../../../store/modules/Notification/notificationSlice';
import { loginUser } from '../../../../store/modules/User/userSlice';

export const FormLogin = () => {
	// const [isOpen, setIsOpen] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const user = useAppSelector((state) => state.user);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (user.user.isLogged) {
			dispatch(showLoading());

			setTimeout(() => {
				dispatch(hideLoading());
				navigate('/home');
			}, 1000);
		}
	}, [dispatch, user, navigate]);

	const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		if (!username || !password) {
			dispatch(
				showNotification({
					success: false,
					message: 'Usuário não cadastrado.',
				}),
			);

			return;
		}

		const login = {
			username: username,
			password: password,
		};

		dispatch(loginUser(login));
	};

	return (
		<Grid item xs={6} sm={4} md={3} sx={{ ml: 7 }}>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					gap: 4,
				}}
			>
				<Typography component="h1" variant="h4">
					Bem-Vindo
				</Typography>
				<TextField
					label="Username"
					onChange={(ev) => setUsername(ev.currentTarget.value)}
					value={username}
					fullWidth
				/>

				<TextField
					label="Senha"
					onChange={(ev) => setPassword(ev.currentTarget.value)}
					value={password}
					fullWidth
					type="password"
				/>

				<Button
					variant="contained"
					size="large"
					type="submit"
					fullWidth
					sx={{
						background: '#B29E84',
						'&:hover': {
							transition: '0.3s',
							background: '#293358',
						},
					}}
				>
					Acessar
				</Button>
				{/* <Typography
					variant="caption"
					sx={{
						fontSize: '15px',
					}}
				>
					Ainda não tem uma conta?{' '}
					<Link
						component="button"
						type="button"
						sx={{
							textDecoration: 'none',
							fontWeight: 'bold',
							fontSize: '1rem',
							color: '#293358',
						}}
						onClick={() => setIsOpen(true)}
					>
						Criar uma!
					</Link>
				</Typography> */}
			</Box>
			{/* <ModalSignup open={isOpen} changeOpen={setIsOpen} /> */}
		</Grid>
	);
};
