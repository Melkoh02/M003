import {observer} from 'mobx-react-lite';
import AuthRoutes from './groups/AuthRoutes';
import HomeRoutes from './groups/HomeRoutes';

import {useStore} from '../lib/hooks/useStore.ts';
import {Box} from '@mui/material';

const AppRoutes = observer(function AppRoutes() {
  const {userStore} = useStore();

  if (!userStore.isHydrated) return null;

  return (
    <Box sx={{height: '100vh', width: '100%', display: 'flex', flex: 1}}>
      {userStore?.user ? <HomeRoutes /> : <AuthRoutes />}
    </Box>
  );
});

export default AppRoutes;
