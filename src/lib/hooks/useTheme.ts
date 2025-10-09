import { useTheme as useMuiTheme } from '@mui/material/styles';
import type { AppTheme } from '../types/theme.ts';

export const useTheme = () => {
  const theme = useMuiTheme<AppTheme>();
  return { theme };
};
