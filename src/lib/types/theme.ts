import type {SharedColors} from '../../themes/sharedColors.ts';

export type Scheme = 'light' | 'dark';

declare module '@mui/material/styles' {
  interface Theme {
    scheme: Scheme;
    customColors: SharedColors;
  }
  interface ThemeOptions {
    scheme?: Scheme;
    customColors?: Partial<SharedColors>;
  }
}

export type AppTheme = import('@mui/material/styles').Theme;
