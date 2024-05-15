import { combineReducers } from '@reduxjs/toolkit';

import loadingSlice from './Loading/loadingSlice';
import ModalId from './ModalId/idSlice';
import notificationSlice from './Notification/notificationSlice';
import clientSlice from './Client/clientSlice';
import contextSliceSecondLine from './ContextModal/contextSlice';
import contextSliceFourthLine from './ContextModalFourthLine/contextSliceFourthLine';
import userSlice from './User/userSlice';
import contextSliceFirstLine from './ContextModalFirstLine/contextSliceFirstLine';
import contextSliceFifthLine from './ContextModalFifthLine/contextSliceFifthLine';
import contextSliceSixthLine from './ContextModalSixthLine/contextSliceSixthLine';

const rootReducer = combineReducers({
	// a cada novo slice, adicionamos uma nova propriedade neste objeto
	// propriedade - nome na store
	// valor - reducer/manager deste estado global
	// modal: modalSlice,
	notification: notificationSlice,
	client: clientSlice,
	user: userSlice,
	loading: loadingSlice,
	contextSliceFirstLine: contextSliceFirstLine,
	contextSecondLine: contextSliceSecondLine,
	contextFourthLine: contextSliceFourthLine,
	contextFifthLine: contextSliceFifthLine,
	contextSixthLine: contextSliceSixthLine,
	idClient: ModalId,

	// modal: modalTarefasSlice,
});

export default rootReducer;
