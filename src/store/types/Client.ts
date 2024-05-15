import { TextType } from './TextEnum';

export interface ClientDto {
	id: string;
	name?: string;
	cpf?: string;
	address?: string;
	phone?: string;
	initialDate?: Date;
	finalDate?: Date;
	item?: number;
	text?: TextType;
	county?: string;
	value?: number;
}
