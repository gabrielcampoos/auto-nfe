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
import { hideModalFirstLine } from '../../../../../store/modules/ContextModalFirstLine/contextSliceFirstLine';

interface ClientProps {
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
	socialReason: string;
	setSocialReason: React.Dispatch<React.SetStateAction<string>>;
	address: string;
	setAddress: React.Dispatch<React.SetStateAction<string>>;
	zipCode: string;
	setZipCode: React.Dispatch<React.SetStateAction<string>>;
	cnpj: string;
	setCnpj: React.Dispatch<React.SetStateAction<string>>;
	number: string;
	setNumber: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalClientFirstLine = ({
	name,
	setName,
	socialReason,
	setSocialReason,
	address,
	setAddress,
	zipCode,
	setZipCode,
	cnpj,
	setCnpj,
	number,
	setNumber,
}: ClientProps) => {
	const dispatch = useAppDispatch();
	const { context, isOpen } = useAppSelector(
		(state) => state.contextSliceFirstLine,
	);

	const closeModal = () => {
		dispatch(hideModalFirstLine());
	};

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		switch (context) {
			case 'createFirstLine':
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
					{context === 'createFirstLine' && 'Criar cabeçalho'}
					{/* {context === 'editar' && 'Editar os'}
					{context === 'excluir' && 'Excluir os'} */}
				</DialogTitle>
				{context !== 'deleteFirstLine' && (
					<>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								name="name"
								label="Nome Fantasia"
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
								id="socialReason"
								name="socialReason"
								label="Razão Social"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) =>
									setSocialReason(ev.target.value)
								}
								value={socialReason}
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
								id="cnpj"
								name="cnpj"
								label="CNPJ"
								type="text"
								fullWidth
								variant="filled"
								onChange={(ev) => setCnpj(ev.target.value)}
								value={cnpj}
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
