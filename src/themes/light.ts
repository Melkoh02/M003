import { createTheme } from '@mui/material/styles';
import { sharedColors } from './sharedColors';

export const lightTheme = createTheme({
  scheme: 'light',
  customColors: sharedColors,
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    background: { default: '#fafafa', paper: '#fff' },
  },
  components: {
    MuiPaper: { styleOverrides: { root: { borderRadius: 12 } } },
  },
});
