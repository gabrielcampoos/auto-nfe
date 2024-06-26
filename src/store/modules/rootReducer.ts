import { combineReducers } from '@reduxjs/toolkit';

import loadingSlice from './Loading/loadingSlice';
import notificationSlice from './Notification/notificationSlice';
import contextSliceSecondLine from './ContextModal/contextSlice';
import contextSliceFourthLine from './ContextModalFourthLine/contextSliceFourthLine';
import userSlice from './User/userSlice';
import contextSliceFirstLine from './ContextModalFirstLine/contextSliceFirstLine';
import contextSliceFifthLine from './ContextModalFifthLine/contextSliceFifthLine';
import contextSliceSixthLine from './ContextModalSixthLine/contextSliceSixthLine';
import contextObservationSlice from './ContextObservation/contextObservationSlice';

const rootReducer = combineReducers({
	// a cada novo slice, adicionamos uma nova propriedade neste objeto
	// propriedade - nome na store
	// valor - reducer/manager deste estado global
	// modal: modalSlice,
	notification: notificationSlice,
	user: userSlice,
	loading: loadingSlice,
	contextSliceFirstLine: contextSliceFirstLine,
	contextSecondLine: contextSliceSecondLine,
	contextFourthLine: contextSliceFourthLine,
	contextFifthLine: contextSliceFifthLine,
	contextSixthLine: contextSliceSixthLine,
	contextObservation: contextObservationSlice,

	// modal: modalTarefasSlice,
});

export default rootReducer;
