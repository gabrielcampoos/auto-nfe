import { UserState } from './UserState';

export interface ResponseCreateUserDto {
	success: boolean;
	message: string;
	data?: UserState & { id: string };
}

export interface ResponseLoginDto {
	success: boolean;
	message: string;
	data?: {
		id: string;
		username: string;
		token: string;
		count: number;
	};
}
