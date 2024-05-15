/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TextType } from '../../types';

interface ClientProps {
	id: string | undefined;
	name: string | undefined;
	cpf: string | undefined;
	address: string | undefined;
	phone: string | undefined;
	initialDate: Date | undefined;
	finalDate: Date | undefined;
	item: number | undefined;
	text: TextType | undefined;
	county: string | undefined;
	value: number | undefined;
}

const initialState: ClientProps = {
	id: '',
	name: '',
	cpf: '',
	address: '',
	phone: '',
	initialDate: undefined,
	finalDate: undefined,
	item: undefined,
	text: undefined,
	county: '',
	value: undefined,
};

export const idClientSlice = createSlice({
	name: 'idClient',
	initialState,
	reducers: {
		getId: (state, action: PayloadAction<ClientProps>) => {
			return {
				id: action.payload.id ?? '',
				name: action.payload.name ?? '',
				cpf: action.payload.cpf ?? '',
				address: action.payload.address ?? '',
				phone: action.payload.phone ?? '',
				initialDate: action.payload.initialDate ?? undefined,
				finalDate: action.payload.finalDate ?? undefined,
				item: action.payload.item ?? undefined,
				text: action.payload.text ?? undefined,
				county: action.payload.county ?? '',
				value: action.payload.value ?? undefined,
			};
		},
		deleteId: (state) => {
			return initialState;
		},
	},
});

export const { deleteId, getId } = idClientSlice.actions;

export default idClientSlice.reducer;
