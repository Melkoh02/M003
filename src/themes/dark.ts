import { createTheme } from '@mui/material/styles';
import { sharedColors } from './sharedColors';

export const darkTheme = createTheme({
  scheme: 'dark',
  customColors: sharedColors,
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    background: { default: '#121212', paper: '#1e1e1e' },
  },
  components: {
    MuiPaper: { styleOverrides: { root: { borderRadius: 12 } } },
  },
});
