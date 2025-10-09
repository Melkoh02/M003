import {Box, Button, Typography} from '@mui/material';
import {useStore} from '../lib/hooks/useStore.ts';

export default function HomeScreen() {
  const {userStore} = useStore();

  return (
    <Box
      sx={{
        bgcolor: 'gray',
        flex: 1,
      }}>
      <Typography>Home Screen</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          userStore.logout();
        }}>
        Log Out
      </Button>
    </Box>
  );
}
