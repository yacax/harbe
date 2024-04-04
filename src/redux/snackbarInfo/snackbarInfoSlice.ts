import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SnackbarInfoType {
  message: string;
  severity: 'error' | 'warning' | 'info' | 'success';
}

const initialState: SnackbarInfoType = {
  message: '',
  severity: 'info',
};

const snackbarInfoSlice = createSlice({
  name: 'snackbarState',
  initialState,
  reducers: {
    addSnackbarInfo: (state, action: PayloadAction<SnackbarInfoType>) => {
      const { message, severity } = action.payload;
      state.message = message;
      state.severity = severity;
    },

    clearSnackbar: (state) => {
      state.message = initialState.message;
      state.severity = initialState.severity;
    },
  },
});

export const { addSnackbarInfo, clearSnackbar } = snackbarInfoSlice.actions;
export default snackbarInfoSlice.reducer;
