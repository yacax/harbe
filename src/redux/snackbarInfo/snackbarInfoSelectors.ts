import { RootState } from '../store/rootReducer';

export const selectSnackbarState = (state: RootState) => state.snackbarState;
