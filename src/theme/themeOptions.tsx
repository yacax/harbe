import { ThemeOptions } from '@mui/material/styles';
import { MAIN_THEME_COLOURS } from '../utils/config';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: MAIN_THEME_COLOURS.PRIMARY_MAIN,
    },
    secondary: {
      main: MAIN_THEME_COLOURS.SECONDARY_MAIN,
    },
  },
};
