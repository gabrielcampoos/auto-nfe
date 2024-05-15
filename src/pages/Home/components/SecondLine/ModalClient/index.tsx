import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@mui/material';
import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { hideModal } from '../../../../../store/modules/ContextModal/contextSlice';

interface ClientProps {
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
	cpf: string;
	setCpf: React.Dispatch<React.SetStateAction<string>>;
	address: string;
	setAddress: React.Dispatch<React.SetStateAction<string>>;
	district: string;
	setDistrict: React.Dispatch<React.SetStateAction<string>>;
	zipCode: string;
	setZipCode: React.Dispatch<React.SetStateAction<string>>;
	uf: string;
	setUf: React.Dispatch<React.SetStateAction<string>>;
	city: string;
	setCity: React.Dispatch<React.SetStateAction<string>>;
	municipalRegistration: string;
	setMunicipalRegistration: React.Dispatch<React.SetStateAction<string>>;
	phone: string;
	setPhone: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalClientSecondLine = ({
	name,
	setName,
	cpf,
	setCpf,
	address,
	setAddress,
	district,
	setDistrict,
	zipCode,
	setZipCode,
	uf,
	setUf,
	city,
	setCity,
	municipalRegistration,
	setMunicipalRegistration,
	phone,
	setPhone,
}: ClientProps) => {
	const dispatch = useAppDispatch();
	const { context, isOpen } = useAppSelector(
		(state) => state.contextSecondLine,
	);

	const closeModal = () => {
		dispatch(hideModal());
	};

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		switch (context) {
			case 'create':
				closeModal();
				break;
			// case 'editar':
			// 	//lógica para editar
			// 	if (osSelecionada.id) {
			// 		dispatch(
			// 			editarOs({
			// 				id: osSelecionada.id,
			// 				equipamento: equipamento,
			// 				descricao: descricao,
			// 				valor: valor,
			// 			}),
			// 		);
			// 	}
			// 	setEquipamento('');
			// 	setDescricao('');
			// 	setValor(0);

			// 	dispatch(apagaId());
			// 	fechaModal();

			// 	break;
			// case 'excluir':
			// 	//lógica de exclusão
			// 	if (osSelecionada.id) {
			// 		dispatch(excluirOs(osSelecionada.id));
			// 	}
			// 	dispatch(apagaId());
			// 	fechaModal();
			// 	dispatch(refresh);
			// 	break;
		}
	};

	return (
		<Dialog open={isOpen}>
			<Box component={'form'} onSubmit={handleSubmit}>
				<DialogTitle>
					{context === 'create' && 'Criar cliente'}
					{/* {context === 'editar' && 'Editar os'}
					{context === 'excluir' && 'Excluir os'} */}
				</DialogTitle>
				{context !== 'delete' && (
					<>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								name="name"
								label="Nome Cliente"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) => setName(ev.target.value)}
								value={name}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="cpf"
								name="cpf"
								label="CNPJ / CPF"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) => setCpf(ev.target.value)}
								value={cpf}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="address"
								name="address"
								label="Endereço"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) => setAddress(ev.target.value)}
								value={address}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="district"
								name="district"
								label="Bairro"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) => setDistrict(ev.target.value)}
								value={district}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="zipCode"
								name="zipCode"
								label="CEP"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) => setZipCode(ev.target.value)}
								value={zipCode}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="uf"
								name="uf"
								label="UF"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) => setUf(ev.target.value)}
								value={uf}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="city"
								name="city"
								label="Cidade"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) => setCity(ev.target.value)}
								value={city}
								multiline
								minRows={3}
							/>

							<TextField
								autoFocus
								margin="dense"
								id="municipalRegistration"
								name="municipalRegistration"
								label="Inscrição Estadual"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setMunicipalRegistration(ev.target.value)
								}
								value={municipalRegistration}
								multiline
								minRows={3}
							/>
							<TextField
								autoFocus
								margin="dense"
								id="phone"
								name="phone"
								label="Telefone"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) => setPhone(ev.target.value)}
								value={phone}
								multiline
								minRows={3}
							/>
						</DialogContent>
						<DialogActions>
							<Button
								type="button"
								variant="outlined"
								onClick={closeModal}
							>
								Cancelar
							</Button>
							<Button
								type="submit"
								color="success"
								variant="contained"
							>
								Salvar
							</Button>
						</DialogActions>
					</>
				)}

				{/* {contexto === 'excluir' && (
					<>
						<DialogContent>
							<Typography variant="body1">
								Você deseja mesmo finalizar essa ordem de
								serviço?
							</Typography>
						</DialogContent>

						<DialogActions>
							<Button
								type="button"
								variant="outlined"
								onClick={fechaModal}
							>
								Cancelar
							</Button>
							<Button
								type="submit"
								color="error"
								variant="contained"
							>
								Finalizar
							</Button>
						</DialogActions>
					</>
				)} */}
			</Box>
		</Dialog>
	);
};
