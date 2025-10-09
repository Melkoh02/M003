import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { observer } from 'mobx-react-lite';
import AppRoutes from '../routes/routes';
import { useStore } from '../lib/hooks/useStore';

const App = observer(function App() {
  const { themeStore } = useStore();

  return (
    <ThemeProvider theme={themeStore.theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;
