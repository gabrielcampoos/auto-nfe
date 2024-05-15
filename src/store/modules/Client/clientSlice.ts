import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { RootState } from '../..';
import serviceApi from '../../../configs/services/api';
import { showNotification } from '../Notification/notificationSlice';
import { ClientDto, ResponseCreateClientDto } from '../../types';

export const createClient = createAsyncThunk(
	'client/create',
	async (data: ClientDto, { dispatch }) => {
		try {
			const response = await serviceApi.post('/client', data);

			dispatch(
				showNotification({
					success: response.data.success,
					message: response.data.message,
				}),
			);

			return response.data;
		} catch (error) {
			if (error instanceof AxiosError) {
				const response: ResponseCreateClientDto = {
					success: error.response?.data.success,
					message: error.response?.data.message,
				};

				dispatch(
					showNotification({
						message: error.response?.data.message,
						success: false,
					}),
				);
				return response;
			}

			return {
				success: false,
				message: 'Algo de errado não está certo. A requisição falhou.',
			};
		}
	},
);

// export const listarOs = createAsyncThunk(
// 	'os/listar',
// 	async (filtros: FiltrarOsDTO, { dispatch }) => {
// 		try {
// 			const headers = {
// 				'Content-Type': 'application/json',
// 				token: localStorage.getItem('userLogged'),
// 			};

// 			const resposta = await servicoAPI('/os', {
// 				headers,
// 				params: {
// 					nomeCliente: filtros.nomeCliente,
// 					equipamento: filtros.equipamento,
// 					valor: filtros.valor,
// 				},
// 			});
// 			dispatch(
// 				showNotification({
// 					message: resposta.data.mensagem,
// 					success: resposta.data.sucesso,
// 				}),
// 			);
// 			return resposta.data;
// 		} catch (error) {
// 			if (error instanceof AxiosError) {
// 				const retorno: RespostaOs = {
// 					sucesso: error.response?.data.sucesso,
// 					mensagem: error.response?.data.mensagem,
// 				};
// 				dispatch(
// 					showNotification({
// 						message: error.response?.data.mensagem,
// 						success: false,
// 					}),
// 				);
// 				return retorno;
// 			}
// 			return {
// 				sucesso: false,
// 				mensagem: 'Algo de errado não está certo. A requisição falhou.',
// 			};
// 		}
// 	},
// );

// export const editarOs = createAsyncThunk(
// 	'os/editar',
// 	async (dados: AtualizarOsDTO, { dispatch }) => {
// 		try {
// 			const headers = {
// 				'Content-Type': 'application/json',
// 				token: localStorage.getItem('userLogged'),
// 			};

// 			const retorno = await servicoAPI.put(`/os/${dados.id}`, dados, {
// 				headers,
// 			});

// 			dispatch(
// 				showNotification({
// 					success: retorno.data.sucesso,
// 					message: retorno.data.mensagem,
// 				}),
// 			);
// 			return retorno.data;
// 		} catch (error) {
// 			if (error instanceof AxiosError) {
// 				const retorno: RespostaOs = {
// 					sucesso: error.response?.data.sucesso,
// 					mensagem: error.response?.data.mensagem,
// 				};
// 				dispatch(
// 					showNotification({
// 						message: error.response?.data.mensagem,
// 						success: false,
// 					}),
// 				);
// 				return retorno;
// 			}
// 			return {
// 				sucesso: false,
// 				mensagem: 'Algo de errado não está certo. A requisição falhou.',
// 			};
// 		}
// 	},
// );

// export const excluirOs = createAsyncThunk(
// 	'os/excluir',
// 	async (id: string, { dispatch }) => {
// 		try {
// 			const headers = {
// 				'Content-Type': 'application/json',
// 				token: localStorage.getItem('userLogged'),
// 			};

// 			const retorno = await servicoAPI.delete(`/os/${id}`, {
// 				headers,
// 			});

// 			dispatch(
// 				showNotification({
// 					message: retorno.data.mensagem,
// 					success: retorno.data.sucesso,
// 				}),
// 			);
// 			return retorno.data;
// 		} catch (error) {
// 			if (error instanceof AxiosError) {
// 				const retorno: RespostaOs = {
// 					sucesso: error.response?.data.sucesso,
// 					mensagem: error.response?.data.mensagem,
// 				};
// 				dispatch(
// 					showNotification({
// 						message: error.response?.data.mensagem,
// 						success: false,
// 					}),
// 				);
// 				return retorno;
// 			}
// 			return {
// 				sucesso: false,
// 				mensagem: 'Algo de errado não está certo. A requisição falhou.',
// 			};
// 		}
// 	},
// );

const clientAdapter = createEntityAdapter<ClientDto>({
	selectId: (state) => state.id,
});

export const { selectAll: listAllClient } = clientAdapter.getSelectors(
	(global: RootState) => global.client,
);

const clientSlice = createSlice({
	name: 'client',
	initialState: clientAdapter.getInitialState({
		loading: false,
		message: '',
	}),
	reducers: {
		refresh(state) {
			return { ...state };
		},
	},

	extraReducers: (builder) => {
		builder.addCase(createClient.pending, (state) => {
			state.loading = true;
			state.message = 'Carregando client.';
		});

		builder.addCase(createClient.fulfilled, (state, action) => {
			const { message, data } = action.payload;

			state.loading = false;
			state.message = message;

			if (!data?.id) {
				console.log(action.payload);
				return;
			}

			clientAdapter.addOne(state, data);
		});

		builder.addCase(createClient.rejected, (state) => {
			state.loading = false;
			state.message = 'Client não criado.';
		});
	},
});

export default clientSlice.reducer;
export const { refresh } = clientSlice.actions;
