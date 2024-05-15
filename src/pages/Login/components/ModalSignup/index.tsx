import { Close } from '@mui/icons-material';
import {
	Box,
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	IconButton,
	TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { IsValidCredentials, User } from '../../../../store/types';
import { createUser } from '../../../../store/modules/User/userSlice';

export interface ModalSignupUserProps {
	open: boolean;
	changeOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalSignup = ({ open, changeOpen }: ModalSignupUserProps) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const stateUser = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	const [errorUsername, setErrorUsername] = useState<IsValidCredentials>({
		helperText: '',
		isValid: true,
	});

	const [errorPassword, setErrorPassword] = useState<IsValidCredentials>({
		helperText: '',
		isValid: true,
	});

	const handleClose = () => {
		changeOpen(false);
	};

	const user: User = {
		username,
		password,
	};

	const handleSignupUser = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		if (!ev.currentTarget.checkValidity()) {
			return;
		}

		dispatch(createUser(user));
		setTimeout(() => {
			setUsername('');
			setPassword('');
			handleClose();
		}, 3000);
	};

	useEffect(() => {
		if (username.length && username.length < 3) {
			setErrorUsername({
				helperText: 'Informe um username válido.',
				isValid: false,
			});
		} else {
			setErrorUsername({
				helperText: 'Utilize um username para criar uma conta.',
				isValid: true,
			});
		}
	}, [username]);

	useEffect(() => {
		if (password.length && password.length < 6) {
			setErrorPassword({
				helperText: 'Cadastre uma senha com no mínimo 6 caracteres.',
				isValid: false,
			});
		} else {
			setErrorPassword({
				helperText:
					'Utilize uma senha fácil de lembrar e anote para não esquecer.',
				isValid: true,
			});
		}
	}, [password]);

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<IconButton
				aria-label="close"
				onClick={handleClose}
				sx={{
					position: 'absolute',
					right: 8,
					top: 8,
					color: (theme) => theme.palette.grey[500],
				}}
			>
				<Close />
			</IconButton>
			<DialogTitle id="alert-dialog-title">
				{'Criar uma conta'}
			</DialogTitle>
			<Divider />
			<Box component="form" onSubmit={handleSignupUser}>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						<TextField
							label="Username"
							type="text"
							error={!errorUsername.isValid}
							helperText={errorUsername.helperText}
							fullWidth
							sx={{ marginY: 3 }}
							onChange={(event) => {
								setUsername(event.currentTarget.value);
							}}
							required
							value={username}
						/>
						<TextField
							label="Senha"
							error={!errorPassword.isValid}
							helperText={errorPassword.helperText}
							type="password"
							fullWidth
							sx={{ marginY: 3 }}
							onChange={(event) => {
								setPassword(event.currentTarget.value);
							}}
							required
							inputProps={{ minLength: 6 }}
							value={password}
						/>
					</DialogContentText>
				</DialogContent>
				<Divider />
				<DialogActions
					sx={{
						paddingY: 3,
					}}
				>
					<Button
						type="button"
						variant="outlined"
						onClick={handleClose}
					>
						Cancelar
					</Button>
					<Button
						disabled={
							!errorUsername.isValid || !errorPassword.isValid
						}
						type="submit"
						variant="contained"
						autoFocus
						startIcon={
							stateUser.loading ? (
								<CircularProgress color="inherit" />
							) : (
								<></>
							)
						}
					>
						Cadastrar
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};
