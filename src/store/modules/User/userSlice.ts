import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { showNotification } from '../Notification/notificationSlice';
import serviceApi from '../../../configs/services/api';
import { ResponseCreateUserDto, ResponseLoginDto, User } from '../../types';

export type UserLogged = {
	id: string;
	username: string;
	isLogged: boolean;
};

const initialState = {
	user: {
		id: '',
		username: '',
		token: '',
		isLogged: false,
	},
	loading: false,
};

export const createUser = createAsyncThunk(
	'user/create',
	async (newUser: User, { dispatch }) => {
		try {
			const response = await serviceApi.post('/user', newUser);

			const responseApi = response.data as ResponseCreateUserDto;

			dispatch(
				showNotification({
					message: responseApi.message,
					success: responseApi.success,
				}),
			);

			return responseApi;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response?.data as ResponseCreateUserDto;

				dispatch(
					showNotification({
						message: response.message,
						success: response.success,
					}),
				);

				return response;
			}

			return {
				success: false,
				message: 'Erro inesperado.',
			};
		}
	},
);

export const loginUser = createAsyncThunk(
	'user/login',
	async (login: User, { dispatch }) => {
		try {
			const response = await serviceApi.post('/login', login);

			const responseApi = response.data as ResponseLoginDto;

			dispatch(
				showNotification({
					success: responseApi.success,
					message: responseApi.message,
				}),
			);
			return responseApi;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response?.data as ResponseLoginDto;

				dispatch(
					showNotification({
						message: response.message,
						success: response.success,
					}),
				);

				return response;
			}

			return {
				success: false,
				message: 'Erro inesperado.',
			};
		}
	},
);

export const getUser = createAsyncThunk(
	'user/getUser',
	async (_, { dispatch }) => {
		try {
			const headers = {
				'Content-Type': 'application/json',
				token: localStorage.getItem('userLogged'),
			};
			const response = await serviceApi.get('/validateDataUser', {
				headers,
			});

			const responseApi = response.data as ResponseLoginDto;

			dispatch(
				showNotification({
					message: responseApi.message,
					success: responseApi.success,
				}),
			);

			return responseApi;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response = error.response?.data as ResponseLoginDto;

				dispatch(
					showNotification({
						message: response.message,
						success: response.success,
					}),
				);

				return response;
			}

			return {
				success: false,
				message: 'Erro inesperado.',
			};
		}
	},
);

export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setUser: (state, action) => {
			return {
				...state,
				user: {
					id: action.payload.id,
					username: action.payload.username,
					token: action.payload.token,
					isLogged: true,
				},
			};
		},

		logoutUser: () => {
			return initialState;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(createUser.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(createUser.fulfilled, (state, action) => {
			const payload = action.payload as ResponseCreateUserDto;

			if (payload.success && payload.data) {
				return {
					user: {
						id: payload.data?.id,
						username: payload.data.username,
						token: payload.data.token,
						isLogged: false,
					},
					loading: false,
				};
			}

			if (!payload.success) {
				return {
					...state,
					loading: false,
				};
			}
		});

		builder.addCase(createUser.rejected, (state) => {
			return {
				...state,
				loading: false,
			};
		});

		//LOGIN
		builder.addCase(loginUser.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(loginUser.fulfilled, (state, action) => {
			const payload = action.payload as ResponseLoginDto;

			if (payload.success && payload.data) {
				localStorage.setItem('userLogged', payload.data.token);

				return {
					user: {
						id: payload.data.id,
						username: payload.data.username,
						token: payload.data.token,
						isLogged: true,
					},
					loading: false,
				};
			}

			if (!payload.success) {
				return initialState;
			}
		});

		builder.addCase(loginUser.rejected, () => {
			return initialState;
		});

		builder.addCase(getUser.pending, (state) => {
			return {
				...state,
				loading: true,
			};
		});

		builder.addCase(getUser.fulfilled, (state, action) => {
			const payload = action.payload as ResponseLoginDto;

			if (payload.success && payload.data) {
				return {
					user: {
						id: payload.data.id,
						username: payload.data.username,
						token: payload.data.token,
						isLogged: true,
					},
					loading: false,
				};
			}

			if (!payload.success) {
				return initialState;
			}
		});

		builder.addCase(getUser.rejected, () => {
			return initialState;
		});
	},
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
