import { combineReducers } from '@reduxjs/toolkit';
import notificationForUserReducer from '../snackbarInfo/snackbarInfoSlice';

const rootReducer = combineReducers({
  snackbarState: notificationForUserReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
